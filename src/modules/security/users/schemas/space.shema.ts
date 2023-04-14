import * as Yup from 'yup';
import '@dfl/yup-validations';

export const spaceUserScheme = Yup.object().shape({
  users: Yup.array().required('required').min(1, 'users:min-1'),
  role: Yup.object().required('required'),
});
