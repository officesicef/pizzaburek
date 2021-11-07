import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Enter an email')
    .max(50, 'Maximum length is 50'),
  name: Yup.string()
    .required('Enter Organization Name.')
    .max(50, 'Maximum length is 50'),
  password: Yup.string()
    .required('Enter password.')
    .max(50, 'Maximum length is 50'),
});
