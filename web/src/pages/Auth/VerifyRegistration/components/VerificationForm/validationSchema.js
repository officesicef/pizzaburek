import * as Yup from 'yup';

export default Yup.object().shape({
  password: Yup.string()
    .required('Enter a password')
    .max(100, 'Maximum length is 100'),
  confirmationPassword: Yup.string()
    .required('Enter confirmation password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  verificationCode: Yup.string()
    .required('Enter Verification Code')
    .min(36, 'Minimum length is 36')
    .max(36, 'Maximum length is 36')
    .nullable(),
});
