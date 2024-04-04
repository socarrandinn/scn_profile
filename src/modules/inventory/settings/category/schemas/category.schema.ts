import * as Yup from 'yup';
import '@dfl/yup-validations';

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
  image: Yup.object(),
  icon: Yup.string().required('required'),
  color: Yup.string().required('required')
});
