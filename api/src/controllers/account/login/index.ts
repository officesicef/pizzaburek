import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { Institution } from '@prisma/client';

import db from '@/db';
import { CustomError } from '@/errors';
import { auth } from '@/utils';
import { errorMessages, statusCodes } from '@/constants';

import validate from './validate';
import { IBody, IResponse } from './interfaces';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<IResponse | void> => {
  try {
    validate(req.body);

    const { email, password }: IBody = req.body;

    const sessionToken: string = await bcrypt.hash(
      String(new Date().getTime()) + email,
      10
    );

    const institution: Institution | null = await db.institution.findFirst({
      where: { email },
    });

    if (!institution) {
      return next(
        new CustomError(
          errorMessages.INVALID_CREDENTIALS,
          statusCodes.BAD_REQUEST
        )
      );
    }

    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      institution.password || ''
    );

    if (!isPasswordValid) {
      return next(
        new CustomError(
          errorMessages.INVALID_CREDENTIALS,
          statusCodes.BAD_REQUEST
        )
      );
    }

    const accessKey: string = auth.signToken({
      id: institution.id,
      email: institution.email,
      sessionToken,
    });

    await db.institution.update({
      where: { id: institution.id },
      data: { accessKey: sessionToken },
    });

    return res.json({ accessKey }).end();
  } catch (error) {
    return next(error);
  }
};
