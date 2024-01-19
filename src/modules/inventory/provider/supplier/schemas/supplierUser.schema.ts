import * as Yup from 'yup';
import '@dfl/yup-validations';

export const supplierUserScheme = Yup.object().shape({
  users: Yup.array().required('required'), // todo: Agregar a locales
  roles: Yup.array().required('required'),
  stores: Yup.array().required('required'),
});
