import * as Yup from 'yup';

export const productGeneralInfoSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2'),
  brand: Yup.string().required('required').min(2, 'min-2'),
  code: Yup.string().required('required').min(2, 'min-2'),
});
