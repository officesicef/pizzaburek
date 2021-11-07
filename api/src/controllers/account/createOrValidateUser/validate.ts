import { object, string } from 'yup';

import { CustomError } from '@/errors';
import { errorMessages, statusCodes } from '@/constants';

import { IBody } from './interfaces';

const validationSchema = object().shape({
  firstName: string().required(errorMessages.FIRST_NAME_REQUIRED),
  lastName: string().required(errorMessages.LAST_NAME_REQUIRED),
  phoneNumber: string().required(errorMessages.PHONE_NUMBER_REQUIRED),
  password: string().required(errorMessages.PASSWORD_REQUIRED),
});

export default (data: IBody): void => {
  try {
    validationSchema.validateSync(data);
  } catch (error: { errors: string[] } | any) {
    throw new CustomError(error.errors[0], statusCodes.UNPROCESSABLE_ENTITY);
  }
};
