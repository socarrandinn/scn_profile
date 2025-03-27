import * as Yup from 'yup';
import '@dfl/yup-validations';

export const statusChangeBulkSchema = Yup.object().shape({
  status: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),
  filters: Yup.object(),
});
