import * as Yup from 'yup';
import '@dfl/yup-validations';

const emailList = ['admin@gmail.com', 'test@gmail.com'];

const asyncNotUsedEmail = async (value: string, values: Yup.TestContext<Yup.AnyObject>) => {
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

export const createEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required('The email is required')
    .email('The email is invalid')
    .max(255, 'max-255')
    .test('emailInUse', 'This email account already exists', asyncNotUsedEmail),
  password: Yup.string()
  // @ts-ignore
    .password()
    .required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .required('The passwords is required')
    .oneOf([Yup.ref('password')], 'The passwords don\'t match'),
});
