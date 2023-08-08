import * as Yup from 'yup';

export const productGeneralInfoSchema = Yup.object().shape({
  name: Yup.string().required().min(2, 'min-2'),
  description: Yup.string().required().min(2, 'min-2'),
  brand: Yup.string().required(),
  code: Yup.string().required(),
});
