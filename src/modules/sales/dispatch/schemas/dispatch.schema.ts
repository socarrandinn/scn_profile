import * as Yup from 'yup';
import '@dfl/yup-validations';

export const dispatchSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  filters: Yup.object(),
});

export const updateDispatchSchema = Yup.object().shape({
  dispatch: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),
});
