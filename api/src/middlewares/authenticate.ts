import jwt, { VerifyErrors } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { User } from '@prisma/client';

import config from '@/config';
import db from '@/db';
import { CustomError } from '@/errors';
import { errorMessages, statusCodes } from '@/constants';

export default async (
  req: Request & { user?: User },
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization: authHeader } = req.headers;
  const token: string | undefined = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next(
      new CustomError(
        errorMessages.MISSING_REQUEST_HEADERS,
        statusCodes.BAD_REQUEST
      )
    );
  }

  return jwt.verify(
    token,
    config.secret,
    async (error: VerifyErrors | null, tokenUser: any): Promise<void> => {
      if (error || !tokenUser.sessionToken) {
        return next(
          new CustomError(
            errorMessages.MISSING_ACCESS_KEY,
            statusCodes.UNPROCESSABLE_ENTITY
          )
        );
      }

      const institution = await db.institution.findFirst({
        where: { id: tokenUser.id, accessKey: tokenUser.sessionToken },
      });

      if (!institution) {
        return next(
          new CustomError(
            errorMessages.UNAUTHORIZED,
            statusCodes.NOT_AUTHORIZED
          )
        );
      }

      req.institution = institution;

      return next();
    }
  );
};
