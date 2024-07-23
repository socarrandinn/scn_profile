import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productImportSchema = Yup.object().shape({
  job: Yup.string(),
});
