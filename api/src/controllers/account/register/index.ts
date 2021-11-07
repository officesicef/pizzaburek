import QRCode from 'qrcode';
import bcrypt from 'bcrypt';
import { Institution } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

import db from '@/db';
import { auth } from '@/utils';
import { statusCodes } from '@/constants';

import validate from './validate';
import { IBody } from './interfaces';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Institution | void> => {
  try {
    validate(req.body);

    const { email, name, password }: IBody = req.body;

    const institution: Institution | null = await db.institution.findFirst({
      where: {
        email,
      },
    });

    if (institution) {
      const { password: __removedPassword, ...cleanedInstitution } =
        institution;

      return res.status(statusCodes.OK_RESULT).json(cleanedInstitution).end();
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);
    const sessionToken: string = await bcrypt.hash(
      String(new Date().getTime()) + email,
      10
    );

    const createdInstitution: Institution = await db.institution.create({
      data: {
        name,
        email,
        qrCode: '',
        password: hashedPassword,
        accessKey: sessionToken,
      },
    });

    const qrCode = await QRCode.toDataURL(createdInstitution.id.toString());

    const updatedInstitution: Institution = await db.institution.update({
      where: { id: createdInstitution.id },
      data: {
        qrCode,
      },
    });

    const accessKey: string = auth.signToken({
      id: updatedInstitution.id,
      email,
      sessionToken,
    });

    const { password: __removedPassword, ...cleanedInstitution } =
      updatedInstitution;

    return res
      .status(statusCodes.CREATED)
      .json({ ...cleanedInstitution, accessKey })
      .end();
  } catch (error) {
    return next(error);
  }
};
