import { UserHasInstitution, OrganizationAccessHistory } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { errorMessages, statusCodes } from '@/constants';
import { CustomError } from '@/errors';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const isUserPartOfInstitution: UserHasInstitution | null =
      await db.userHasInstitution.findFirst({
        where: {
          userId: req.body.userId,
          institutionId: req.body.institutionId,
        },
      });

    if (!isUserPartOfInstitution) {
      await db.userHasInstitution.create({
        data: req.body,
      });
    }

    const doesHistoryExists: OrganizationAccessHistory | null =
      await db.organizationAccessHistory.findFirst({
        where: {
          userId: req.body.userId,
          institutionId: req.body.institutionId,
          checkedOut: {
            equals: null,
          },
        },
      });

    if (doesHistoryExists) {
      return next(
        new CustomError(
          errorMessages.CHECK_IN_NOT_POSSIBLE,
          statusCodes.BAD_REQUEST
        )
      );
    }

    await db.organizationAccessHistory.create({
      data: req.body,
    });

    return res.status(statusCodes.CREATED).json().end();
  } catch (error) {
    return next(error);
  }
};
