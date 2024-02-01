import * as Yup from 'yup';

const providerSchema = Yup.object().shape({
  supplier: Yup.string().transform((a) => (typeof a === 'string' ? a : a?.providerId)).required('required'),
});

export const productOrganizationSchema = Yup.object().shape({
  category: Yup.string().transform((a) => (typeof a === 'string' ? a : a?.categoryId)).required('required'),
  providers: providerSchema,
});
