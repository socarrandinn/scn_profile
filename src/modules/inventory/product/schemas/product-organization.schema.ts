import * as Yup from 'yup';

const providerSchema = Yup.object().shape({
  supplier: Yup.string().required('required'),
});

export const productOrganizationSchema = Yup.object().shape({
  category: Yup.string().required('required'),
  providers: providerSchema,
});
