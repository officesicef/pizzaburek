import { NextFunction, Request, Response } from 'express';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    //   TODO: Not implemented

    return res.json().end();
  } catch (error) {
    return next(error);
  }
};
