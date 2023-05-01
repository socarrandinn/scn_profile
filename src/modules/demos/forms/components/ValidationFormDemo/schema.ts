import * as Yup from 'yup';
import '@dfl/yup-validations';
import { CIVIL_STATUS_ENUM, GENDER_ENUM } from './data';

const bankAccountValidator = (value: string) => {
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return value ? regex.test(value) : true;
};

const getXYearsOldDate = (years: number = 18) => {
  const today = new Date();
  return new Date(today.getFullYear() - years, today.getMonth(), today.getDate());
};

const asyncNotUsedEmail = async (value: string, values: Yup.TestContext<Yup.AnyObject>) => {
  const emailList = ['admin@gmail.com', 'test@gmail.com'];
  return await new Promise<boolean>((resolve) => {
    return setTimeout(() => {
      if (!emailList.includes(value)) {
        resolve(true);
      } else {
        values.createError({
          path: 'email',
          message: 'This email is in use',
        });
        resolve(false);
      }
    }, 4000);
  });
};

export const validationSchema = Yup.object().shape({
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
    .required('The email is required')
    .test('emailInUse', 'This email is in use', asyncNotUsedEmail),
  gender: Yup.string().oneOf(Object.values(GENDER_ENUM), 'Unknown gender'),
  civilStatus: Yup.string().oneOf(Object.values(CIVIL_STATUS_ENUM), 'Unknown civil status'),
  otherCivilStatusDescription: Yup.string()
    .typeError('You must specify the civil status')
    .when('civilStatus', {
      is: CIVIL_STATUS_ENUM.OTHER,
      then: (schema) =>
        schema
          .required('The description is required')
          .min(3, 'The description must have more than 2 characters.')
          .max(20, 'The description must have less than 20 characters.'),
      otherwise: (schema) => schema,
    }),
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
