import { NextFunction, Request, Response } from 'express';

export default (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void =>
  res
    .status(err.statusCode || 500)
    .json({ error: err.message, statusCode: err.statusCode })
    .end();
