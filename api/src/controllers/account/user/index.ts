import { NextFunction, Request, Response } from 'express';
import { Institution } from '@prisma/client';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Institution | void> => {
  try {
    return res.json(req.institution).end();
  } catch (error) {
    return next(error);
  }
};
