import * as Yup from 'yup';
import '@dfl/yup-validations';

export const timeOffTypesSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  color: Yup.string().required('required').min(3, 'min-3').max(8, 'max-255'),
  logType: Yup.string().required('required'),
  showInCalendar: Yup.boolean().required('required'),
});
