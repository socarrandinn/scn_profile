import * as Yup from 'yup';
import '@dfl/yup-validations';

export const supplierUserScheme = Yup.object().shape({
  users: Yup.array().required('required'),
  roles: Yup.object().required('required'),
  stores: Yup.object().required('required'),
});
