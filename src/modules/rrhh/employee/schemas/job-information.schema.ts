import * as Yup from 'yup';
import { Engagement } from 'modules/rrhh/employee/constants';

export const JobInformationSchema = Yup.object().shape({
  position: Yup.string().required('required'),
  reported: Yup.string(),
  location: Yup.string().required('required'),
  notes: Yup.string(),
  engagement: Yup.mixed().oneOf(Object.values(Engagement)).required('required'),
  // dateActivated: Yup.date().required('required'),
});
