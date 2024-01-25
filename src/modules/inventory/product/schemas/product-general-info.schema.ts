import * as Yup from 'yup';
import { ImagesScheme } from 'modules/common/schemas';

export const productGeneralInfoSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2'),
  description: Yup.string().required('required').min(2, 'min-2'),
  media: ImagesScheme,
  brand: Yup.string().required('required').min(2, 'min-2'),
  code: Yup.string().required('required').min(2, 'min-2'),
});
