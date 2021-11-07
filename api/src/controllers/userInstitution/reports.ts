import {
  Report,
  User,
  Institution,
  OrganizationAccessHistory,
} from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { ParsedQs } from 'qs';

import db from '@/db';
import { errorMessages, statusCodes } from '@/constants';
import { CustomError } from '@/errors';

const DAYS_TO_LOOK_BACK = 10;

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any[] | void> => {
  try {
    const { timeOffset }: ParsedQs = req.query;

    const reports: any[] = await db.report.findMany({
      where: { institutionId: req.institution.id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            covidConfirmation: true,
            institutions: {
              include: {
                institution: {
                  include: {
                    organizationAccessHistory: { include: { user: true } },
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (reports.length <= 0) {
      return next(
        new CustomError(errorMessages.NOT_FOUND_REPORTS, statusCodes.NOT_FOUND)
      );
    }

    const interactionTimeOffset: number = timeOffset
      ? parseInt(timeOffset.toString(), 10)
      : 0;
    const resultingReports: any = [];
    reports.forEach(
      (report: Report & { user: User & { institutions: Institution[] } }) => {
        const interactedUsers: any = [];
        report.user.institutions.forEach((userInstitution: any) => {
          const userOrganizationAccessTimes: OrganizationAccessHistory[] =
            userInstitution.institution.organizationAccessHistory.filter(
              (history: OrganizationAccessHistory) =>
                history.userId === report.user.id
            );
          const recentAccessHistories =
            userInstitution.institution.organizationAccessHistory.filter(
              (history: OrganizationAccessHistory) =>
                history.checkedIn >=
                new Date(
                  new Date(report.createdAt).setDate(
                    report.createdAt.getDate() - DAYS_TO_LOOK_BACK
                  )
                )
            );

          userOrganizationAccessTimes.forEach((userOrganizationTime) => {
            recentAccessHistories.forEach(
              (history: OrganizationAccessHistory) => {
                const checkOutTime =
                  history.checkedOut?.getTime() ??
                  userOrganizationTime.checkedIn.getTime();
                if (
                  history.userId !== report.userId &&
                  history.checkedIn.getTime() >=
                    userOrganizationTime.checkedIn.getTime() -
                      interactionTimeOffset &&
                  checkOutTime <=
                    (userOrganizationTime.checkedOut?.getTime() ??
                      history.checkedIn.getTime()) +
                      interactionTimeOffset
                ) {
                  interactedUsers.push(history);
                }
              }
            );
          });
        });
        resultingReports.push({ ...report, interactedUsers });
      }
    );

    return res.status(statusCodes.CREATED).json(resultingReports).end();
  } catch (error) {
    return next(error);
  }
};
