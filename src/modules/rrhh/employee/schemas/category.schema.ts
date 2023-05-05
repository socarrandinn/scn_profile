import * as Yup from 'yup';
import '@dfl/yup-validations';

export const categorySchema = Yup.object().shape({
  dateActivated: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  category: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  notes: Yup.string().nullable(),
});
