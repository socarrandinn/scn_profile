import * as Yup from 'yup';
import '@dfl/yup-validations';

export const roleProviderSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  description: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  provider: Yup.string().required('El role debe tener un tipo')
});

// export const rolePermissionsSchema = Yup.object().shape({
//   permissions: Yup.array().required('required').min(1, 'permissions:min-1'),
// });

// export const roleIconSchema = Yup.object().shape({
//   avatar: Yup.string().required('required'),
// });
