import * as Yup from 'yup';
import '@dfl/yup-validations';

export const causesIncidenceSchema = Yup.object().shape({
  type: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
});
