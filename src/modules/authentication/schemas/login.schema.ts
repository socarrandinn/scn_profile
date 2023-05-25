import * as Yup from 'yup';
import '@dfl/yup-validations';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

Yup.addMethod(Yup.string, 'validEmail', function (errorMessage) {
  return Yup.string().matches(emailRegex, 'validEmail').required('required');
});

export const emailScheme = Yup.object().shape({
  // @ts-ignore
  email: Yup.string().validEmail(),
});

export const loginSchema = Yup.object().shape({
  // @ts-ignore
  email: Yup.string().validEmail(),
  // @ts-ignore
  password: Yup.string().required('required').password(),
});

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'min-2')
    .max(255, 'max-255')
    // @ts-ignore
    .name('invalidValue')
    .trim()
    .required('required'),
  lastName: Yup.string()
    .min(2, 'min-2')
    .max(255, 'max-255')
    // @ts-ignore
    .name('invalidValue')
    .trim()
    .required('required'),
  // @ts-ignore
  email: Yup.string().validEmail(),
  password: Yup.string()
    .min(6, 'passwordStrength')
    .test('is-not-empty', 'isNotEmpty', (value) => {
      return value?.trim() !== '';
    })
    .required('required'),
});

export const resetPasswordSchema = Yup.object().shape({
  // @ts-ignore
  password: Yup.string().password().required('required'),
  confirmPassword: Yup.string()
    .required('required')
    .oneOf([Yup.ref('password')], 'passwordsMatch'),
});
