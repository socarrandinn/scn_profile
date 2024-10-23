import * as Yup from 'yup';
import '@dfl/yup-validations';

export const reportCauseSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4'),
});

export const reportCauseIdSchema = Yup.object().shape({
  cause: Yup.string().required('required'),
});
