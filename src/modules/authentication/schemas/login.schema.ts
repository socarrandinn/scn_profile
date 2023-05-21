import * as Yup from 'yup';
import '@dfl/yup-validations';

export const emailScheme = Yup.object().shape({
  email: Yup.string().email('validEmail').max(255, 'max-255').required('required'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('validEmail').max(255, 'max-255').required('required'),
  // @ts-ignore
  password: Yup.string().password().required('required'),
});

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'min-2')
    .max(255, 'max-255')
  // @ts-ignore
    .name('invalidValue')
    .trim().required('required'),
  lastName: Yup.string()
    .min(2, 'min-2')
    .max(255, 'max-255')
  // @ts-ignore
    .name('invalidValue')
    .trim().required('required'),
  email: Yup.string().email('validEmail').max(255).required('required'),
  password: Yup.string().min(6, 'passwordStrength').required('required'),
});

export const resetPasswordSchema = Yup.object().shape({
  // @ts-ignore
  password: Yup.string().password().required('required'),
  confirmPassword: Yup.string()
    .required('required')
    .oneOf([Yup.ref('password')], 'passwordsMatch'),
});
