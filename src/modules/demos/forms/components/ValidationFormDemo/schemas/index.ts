import * as Yup from 'yup';
import '@dfl/yup-validations';
import { bankAccountValidator, GENDER_ENUM, getXYearsOldDate } from '../utils';

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('The name is required.')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, {
      name: 'nameValidator',
      message: 'The first name is invalid',
      excludeEmptyString: true,
    }),
  lastName: Yup.string()
    .required('The name is required.')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, {
      name: 'lastNameValidator',
      message: 'The last name is invalid',
      excludeEmptyString: true,
    }),
  email: Yup.string()
    .email('The email is invalid')
    .required('The email is required'),
  gender: Yup.string().oneOf(Object.values(GENDER_ENUM), 'Unknown gender'),
  birthday: Yup.date()
    .min(getXYearsOldDate(100), 'The person must have less than 100 years old')
    .max(getXYearsOldDate(), 'The person must have more than 18 years old'),
  accountNumber: Yup.string()
    .required('The account number is required')
    .test('accountNumber', 'Must have the format xxxx-xxxx-xxxx-xxxx', bankAccountValidator),
  siteUrl: Yup.string().url('The url is invalid.'),
  password: Yup.string()
    // @ts-ignore
    .password()
    .required('The password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Mismatched passwords')
    .required('Please confirm your password'),
});
