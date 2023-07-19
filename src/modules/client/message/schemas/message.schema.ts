import * as Yup from 'yup';
import '@dfl/yup-validations';

export const messageSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
  email: Yup.string().required('required').trim().email('validEmail').max(255),
  subject: Yup.string().required('required'),
  message: Yup.string().required('required')
});
