import { object, string } from 'yup';

import { CustomError } from '@/errors';
import { errorMessages, statusCodes } from '@/constants';

import { IBody } from './interfaces';

const validationSchema = object().shape({
  email: string()
    .email(errorMessages.EMAIL_NOT_VALID)
    .required(errorMessages.EMAIL_REQUIRED),
  name: string().required(errorMessages.NAME_REQUIRED),
  password: string().required(errorMessages.PASSWORD_REQUIRED),
});

export default (data: IBody): void => {
  try {
    validationSchema.validateSync(data);
  } catch (error: { errors: string[] } | any) {
    throw new CustomError(error.errors[0], statusCodes.UNPROCESSABLE_ENTITY);
  }
};
