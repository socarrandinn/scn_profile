import * as Yup from 'yup';
import '@dfl/yup-validations';

export const orderStatusSchema = Yup.object().shape({
  title: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
  order: Yup.number().typeError('invalidValue-number').required('required').min(0, 'min-0'),
  tracking: Yup.boolean().required('required'),
  allowTo: Yup.array().of(Yup.string()).required('required'),
});
