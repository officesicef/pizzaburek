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

    const updated: T = await common
      .getKeyValue(common.singular(model))(db)
      .updateMany({
        data: req.body,
        where: {
          id,
        },
      });

    if (!updated) {
      return next(
        new CustomError(errorMessages.NOT_FOUND, statusCodes.NOT_FOUND)
      );
    }

    const updatedEntity: T = await common
      .getKeyValue(common.singular(model))(db)
      .findFirst({
        where: {
          id,
        },
      });

    return res.status(statusCodes.OK_RESULT).json(updatedEntity).end();
  } catch (error) {
    return next(error);
  }
};
