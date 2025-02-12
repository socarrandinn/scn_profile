import * as Yup from 'yup';
import '@dfl/yup-validations';

export const stockReductionCauseSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string(),
  requiresResponsible: Yup.boolean(),
  requiresEvidence: Yup.boolean(),
});
