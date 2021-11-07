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
): Promise<void> => {
  try {
    const { model, id }: IParams = req.params;

    const deleted: T = await common
      .getKeyValue(common.singular(model))(db)
      .deleteMany({
        where: {
          id: parseInt(id, 10),
        },
      });

    if (!deleted) {
      return next(
        new CustomError(errorMessages.NOT_FOUND, statusCodes.NOT_FOUND)
      );
    }

    return res.status(statusCodes.NO_CONTENT).end();
  } catch (error) {
    return next(error);
  }
};
