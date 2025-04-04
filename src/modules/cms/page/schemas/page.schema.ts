import * as Yup from 'yup';
import '@dfl/yup-validations';

export const seoSchema = Yup.object().shape({
  seo: Yup.object().shape({
    name: Yup.string().min(2, 'min-2').max(255, 'max-255'),
    description: Yup.string().min(2, 'min-2').max(255, 'max-255'),
  }),
});

export const contentSchema = Yup.object().shape({
  content: Yup.string().min(2, 'min-2'),
});

export const pageSchema = Yup.object()
  .shape({
    slug: Yup.string().trim().required('required').min(1, 'min-1').max(255, 'max-255'),
  })
  .concat(contentSchema)
  .concat(seoSchema);
