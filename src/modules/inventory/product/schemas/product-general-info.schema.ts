import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ImagesScheme } from 'modules/common/schemas';

export const productGeneralInfoSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2'),
  description: Yup.string().required('required').min(2, 'min-2'),
  media: ImagesScheme,
  brand: Yup.string().required('required').min(2, 'min-2'),
  code: Yup.string().required('required').min(2, 'min-2'),
  referenceCode: Yup.string(),
  category: Yup.string().transform((a) => (typeof a === 'string' ? a : a?.categoryId)).required('required'),
});
