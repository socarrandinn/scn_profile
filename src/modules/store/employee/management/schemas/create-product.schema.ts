import * as Yup from 'yup';

export const CreateProductSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  brand: Yup.string().required(),
  code: Yup.string().required(),
  // productProvider: Yup.string().required(),
  // costPrice: Yup.number().required(),
});
