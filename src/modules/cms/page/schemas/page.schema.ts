import * as Yup from 'yup';
import '@dfl/yup-validations';

export const pageSchema = Yup.object().shape({
  seo: Yup.object().shape({
    name: Yup.string().trim().required('required').min(2, 'min-2').max(255, 'max-255'),
    description: Yup.string().min(2, 'min-2').max(255, 'max-255'),
  }),
  slug: Yup.string().trim().required('required').min(1, 'min-1').max(255, 'max-255'),
});
