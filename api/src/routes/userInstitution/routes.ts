import { Router } from 'express';

import { authenticate } from '@/middlewares';
import { paths } from '@/constants';
import { userInstitution } from '@/controllers';

export default (router: Router): void => {
  router.post(paths.USER_INSTITUTIONS, userInstitution.create);
  router.get(
    paths.USER_INSTITUTIONS,
    authenticate,
    userInstitution.getCheckInList
  );
  router.post(
    paths.USER_INSTITUTIONS_CHECK_OUT,
    authenticate,
    userInstitution.checkOutUser
  );
  router.get(
    paths.USER_INSTITUTIONS_REPORTS_USER_INTERACTION,
    authenticate,
    userInstitution.reports
  );
  router.post(
    paths.USER_INSTITUTIONS_REPORT,
    authenticate,
    userInstitution.reportUser
  );
};
