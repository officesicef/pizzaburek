import { Router, Request, Response } from 'express';

import { account } from '@/controllers';
import { authenticate } from '@/middlewares';
import { paths } from '@/constants';

export default (router: Router): void => {
  router.get(
    paths.AUTH_HEALTH,
    authenticate,
    (req: Request, res: Response): void => res.status(200).end()
  );
  router.post(paths.AUTH_LOGIN, account.login);
  router.post(paths.AUTH_CREATE_OR_VALIDATE_USER, account.createOrValidateUser);
  router.post(paths.AUTH_REGISTER, account.register);
  router.get(paths.AUTH_USER, authenticate, account.user);
};
