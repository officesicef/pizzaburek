import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { CustomError } from '@/errors';
import { common } from '@/utils';
import { errorMessages, statusCodes } from '@/constants';

interface IParams {
  model?: string;
  id?: string;
}

export default async <T>(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<T | void> => {
  try {
    const { model, id }: IParams = req.params;

    if (!id) {
      return res.status(statusCodes.OK_RESULT).end();
    }

    const foundEntity: T = await common
      .getKeyValue(common.singular(model))(db)
      .findFirst({
        where: {
          id,
        },
      });

    if (!foundEntity) {
      return next(
        new CustomError(errorMessages.NOT_FOUND, statusCodes.NOT_FOUND)
      );
    }

    return res.status(statusCodes.OK_RESULT).json(foundEntity).end();
  } catch (error) {
    return next(error);
  }
};
