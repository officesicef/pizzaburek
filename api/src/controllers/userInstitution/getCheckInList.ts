import { OrganizationAccessHistory } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { errorMessages, statusCodes } from '@/constants';
import { CustomError } from '@/errors';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<OrganizationAccessHistory[] | void> => {
  try {
    const accessHistory: OrganizationAccessHistory[] =
      await db.organizationAccessHistory.findMany({
        where: { institutionId: req.institution.id },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              phoneNumber: true,
              covidConfirmation: true,
              report: true,
            },
          },
        },
        orderBy: { checkedIn: 'desc' },
      });

    if (accessHistory.length <= 0) {
      return next(
        new CustomError(
          errorMessages.NOT_FOUND_ACCESS_HISTORY,
          statusCodes.NOT_FOUND
        )
      );
    }

    return res.status(statusCodes.CREATED).json(accessHistory).end();
  } catch (error) {
    return next(error);
  }
};
