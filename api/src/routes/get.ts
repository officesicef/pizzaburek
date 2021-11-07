import express, { Router, Request, Response } from 'express';

import auth from './auth';
import generics from './generics';
import userInstitution from './userInstitution';

const router: Router = express.Router();

export default (): Router => {
  auth.routes(router);
  userInstitution.routes(router);
  generics.routes(router);

  router.use('*', (req: Request, res: Response): void => res.status(404).end());

  return router;
};
