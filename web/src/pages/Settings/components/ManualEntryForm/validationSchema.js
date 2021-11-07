import * as Yup from 'yup';

export default Yup.object().shape({
  firstName: Yup.string()
    .required('Enter first name.')
    .max(50, 'Maximum length is 50.'),
  lastName: Yup.string()
    .required('Enter last name.')
    .max(50, 'Maximum length is 50.'),
  phoneNumber: Yup.string()
    .required('Enter phone number.')
    .max(50, 'Maximum length is 50.'),
});
