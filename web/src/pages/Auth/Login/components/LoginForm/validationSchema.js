import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Enter an email')
    .max(100, 'Maximum length is 100'),
  password: Yup.string()
    .required('Enter a password')
    .max(100, 'Maximum length is 100'),
});
