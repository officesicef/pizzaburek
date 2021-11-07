import { OrganizationAccessHistory } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { statusCodes } from '@/constants';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { historyId } = req.body;

    const updatedAccessHistory: OrganizationAccessHistory =
      await db.organizationAccessHistory.update({
        where: {
          id: historyId,
        },
        data: { checkedOut: new Date() },
      });

    return res.status(statusCodes.OK_RESULT).json(updatedAccessHistory).end();
  } catch (error) {
    return next(error);
  }
};
