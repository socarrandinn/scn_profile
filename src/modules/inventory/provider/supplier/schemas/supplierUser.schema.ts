import * as Yup from 'yup';
import '@dfl/yup-validations';

export const supplierUserScheme = Yup.object().shape({
  users: Yup.array().required('required'),
  role: Yup.object().required('required'),
  store: Yup.object().required('required'),
});
