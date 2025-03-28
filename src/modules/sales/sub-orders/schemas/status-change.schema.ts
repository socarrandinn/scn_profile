import * as Yup from 'yup';
import '@dfl/yup-validations';

export const statusChangeBulkSchema = Yup.object().shape({
  status: Yup.string()
    .required('required')
    .transform((d) => d?._id || d),
  filters: Yup.object(),
});

export const statusOrderFileSchema = Yup.object().shape({
  file: Yup.mixed()
    .transform((value) => {
      return Array.isArray(value) ? value?.[0]?.url || '' : value;
    })
    .nullable()
    .optional(),
});
