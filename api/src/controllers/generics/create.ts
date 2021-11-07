import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { common } from '@/utils';
import { statusCodes } from '@/constants';

interface IParams {
  model?: string;
}

export default async <T>(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<T | void> => {
  try {
    const { model }: IParams = req.params;

    const createdEntity: T = await common
      .getKeyValue(common.singular(model))(db)
      .create({
        data: {
          ...req.body,
        },
      });

    return res.status(statusCodes.CREATED).json(createdEntity).end();
  } catch (error) {
    return next(error);
  }
};
