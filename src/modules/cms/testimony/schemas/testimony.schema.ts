import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ImageItemScheme } from 'modules/common/schemas';

export const testimonySchema = Yup.object().shape({
  title: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  personName: Yup.string().required('required'),
  comment: Yup.string().required('required'),
});
