import * as Yup from 'yup';
import '@dfl/yup-validations';

const providerSchema = Yup.object().shape({
  supplier: Yup.string()
    .transform((a) => a?._id || a)
    .required('required'),
  manufacturer: Yup.string()
    .transform((a) => a?._id || a)
    .required('required'),
});

export const productProviderSchema = Yup.object().shape({
  providers: providerSchema,
});
