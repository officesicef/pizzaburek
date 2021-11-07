import { Report } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { statusCodes } from '@/constants';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = req.body;

    const report: Report | null = await db.report.create({
      data: { userId, institutionId: req.institution.id },
    });

    return res.status(statusCodes.CREATED).json(report).end();
  } catch (error) {
    return next(error);
  }
};
