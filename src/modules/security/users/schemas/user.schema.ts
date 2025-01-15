import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PasswordType } from 'modules/security/users/interfaces/IChangePassword';
import { IRole } from 'modules/security/roles/interfaces';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

export const userInvitationSchema = Yup.object().shape({
  email: Yup.string()
    .transform((e) => e.email || e)
    .email('validEmail')
    .max(255)
    .required('required'),
});

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'min-2')
    .max(255, 'max-255')
    // @ts-ignore
    .name('invalidValue') // name es una validacion custom creada en @dfl/yup-validations
    .required('required'),
  lastName: Yup.string()
    .min(2, 'min-2')
    .max(255, 'max-255')
    // @ts-ignore
    .name('invalidValue')
    .required('required'),
  // @ts-ignore
  phone: Yup.string().nullable().phone('validPhone'),
  email: Yup.string().email('validEmail').max(255).required('required'),
});

export const userProviderSchema = Yup.object().shape({
  space: Yup.string()
    .transform((prov) => prov?._id || prov)
    .required(),
  email: Yup.string()
    .transform((e) => e?.email || e)
    .email('validEmail')
    .max(255)
    .required('required'),
  type: Yup.string().oneOf(Object.keys(ROLE_PROVIDER_TYPE_ENUM)).required('required'),
});

export const userIdsSchema = Yup.object().shape({
  //   users: Yup.array().required('required').min(1, 'users:min-1'),
  users: Yup.array(),
});

export const userAddRolesSchema = Yup.object().shape({
  roles: Yup.array().required('required').min(1, 'roles:min-1'),
});

export const userRolesSchema = Yup.object().shape({
  roles: Yup.array().required('required').min(1, 'roles:min-1'),
});

export const userRetypePasswordSchema = Yup.object().shape({
  password: Yup.string()
    // @ts-ignore
    .password()
    .max(255, 'max-255')
    .required('required'),
  confirm: Yup.string()
    // @ts-ignore
    .password()
    .max(255, 'max-255')
    // @ts-ignore
    .oneOf([Yup.ref('password'), null], 'passwordsMustMatch')
    .required('required'),
  changePasswordRequire: Yup.boolean().required('required'),
  typePassword: Yup.string().oneOf(Object.values(PasswordType)).required('required'),
});
