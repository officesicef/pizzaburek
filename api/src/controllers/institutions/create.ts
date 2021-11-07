import { Institution } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { statusCodes } from '@/constants';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Institution | void> => {
  try {
    const institution: Institution = await db.institution.create({
      data: req.body,
    });

    return res.status(statusCodes.CREATED).json(institution).end();
  } catch (error) {
    return next(error);
  }
};
