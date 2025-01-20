import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productImportSchema = Yup.object().shape({
  job: Yup.string(),
});

export const productImportFileSchema = Yup.object().shape({
  file: Yup.string(),
});
