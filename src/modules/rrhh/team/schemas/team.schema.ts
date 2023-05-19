import * as Yup from 'yup';
import '@dfl/yup-validations';

export const teamSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  manager: Yup.string().nullable(),
  icon: Yup.string().nullable(),
  color: Yup.string().nullable(),
  description: Yup.string().nullable()
});
