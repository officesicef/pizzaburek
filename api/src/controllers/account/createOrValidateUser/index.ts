import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { User } from '@prisma/client';

import db from '@/db';
import { auth } from '@/utils';
import { statusCodes } from '@/constants';

import validate from './validate';
import { IBody } from './interfaces';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User | void> => {
  try {
    validate(req.body);

    const { firstName, lastName, phoneNumber, password }: IBody = req.body;

    const user: User | null = await db.user.findFirst({
      where: {
        phoneNumber,
      },
    });

    if (user) {
      const { password: __removedPassword, ...cleanedUser } = user;

      return res.status(statusCodes.OK_RESULT).json(cleanedUser).end();
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);
    const sessionToken: string = await bcrypt.hash(
      String(new Date().getTime()) + phoneNumber,
      10
    );

    const createdUser: User = await db.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        password: hashedPassword,
        accessKey: sessionToken,
      },
    });

    const accessKey: string = auth.signToken({
      id: createdUser.id,
      phoneNumber,
      sessionToken,
    });

    const { password: __removedPassword, ...cleanedUser } = createdUser;

    return res
      .status(statusCodes.CREATED)
      .json({ ...cleanedUser, accessKey })
      .end();
  } catch (error) {
    return next(error);
  }
};
