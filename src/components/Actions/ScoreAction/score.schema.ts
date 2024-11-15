import * as Yup from 'yup';
import '@dfl/yup-validations';

export const scoreSchema = Yup.object().shape({
  score: Yup.number().min(0),
});
