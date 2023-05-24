import * as Yup from 'yup';
import '@dfl/yup-validations';

export const timeOffSchema = Yup.object().shape({
  policy: Yup.string().required('required'),
  amount: Yup.number().min(1, 'min-1-days').max(15, 'max-30-days'),
  startDate: Yup.string().required('required'),
  endDate: Yup.string().required('required'),
});
