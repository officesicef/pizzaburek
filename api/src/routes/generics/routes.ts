import { Router } from 'express';

import { authenticate } from '@/middlewares';
import { generics } from '@/controllers';
import { paths } from '@/constants';

export default (router: Router): void => {
  router.get(paths.GENERICS_MODEL, authenticate, generics.get);
  router.post(paths.GENERICS_MODEL, authenticate, generics.create);
  router.get(paths.GENERICS_MODEL_ID, authenticate, generics.getById);
  router.put(paths.GENERICS_MODEL_ID, authenticate, generics.updateById);
  router.delete(paths.GENERICS_MODEL_ID, authenticate, generics.deleteById);
};
