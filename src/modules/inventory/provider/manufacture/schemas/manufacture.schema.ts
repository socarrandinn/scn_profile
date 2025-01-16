import * as Yup from 'yup';
import '@dfl/yup-validations';

export const manufactureSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  state: Yup.boolean(),
  brand: Yup.array(),
});

export const manufactureTagsSchema = Yup.object().shape({
  keywords: Yup.array(),
});
