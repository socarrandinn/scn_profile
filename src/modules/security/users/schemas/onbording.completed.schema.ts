import * as Yup from 'yup';
import '@dfl/yup-validations';

export const onBordingCompletedSchema = Yup.object().shape({
  password: Yup.string()
    // @ts-ignore
    .password()
    .max(255, 'max-255')
    .required('required'),
  repeat_password: Yup.string()
    // @ts-ignore
    .password()
    .max(255, 'max-255')
    // @ts-ignore
    .oneOf([Yup.ref('password'), null], 'passwordsMustMatch')
    .required('required'),
});

export const changePasswordRequireSchema = Yup.object().shape({
  lastPassword: Yup.string()
    // @ts-ignore
    .password()
    .max(255, 'max-255')
    .required('required'),
  password: Yup.string()
    // @ts-ignore
    .password()
    .max(255, 'max-255')
    .required('required'),
  repeat_password: Yup.string()
    // @ts-ignore
    .password()
    .max(255, 'max-255')
    // @ts-ignore
    .oneOf([Yup.ref('password'), null], 'passwordsMustMatch')
    .required('required'),
});
