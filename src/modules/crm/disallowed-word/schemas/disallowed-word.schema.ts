import * as Yup from 'yup';
import '@dfl/yup-validations';

export const disallowedWordSchema = Yup.object().shape({
  word: Yup.string().required('required').trim().min(4, 'min-4').max(30, 'max-30'),
});
