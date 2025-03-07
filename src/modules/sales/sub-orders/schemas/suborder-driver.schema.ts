import * as Yup from 'yup';
import '@dfl/yup-validations';

export const subOrderDriverSchema = Yup.object().shape({
  carrier: Yup.string()
    .required('required')
    .transform((value) => value?._id || value),
  driver: Yup.string()
    .required('required')
    .transform((value) => value?._id || value),
});
