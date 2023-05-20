import * as Yup from 'yup';
import { Engagement } from 'modules/rrhh/employee/constants';

export const JobInformationSchema = Yup.object().shape({
  position: Yup.string().required('required'),
  reported: Yup.string().nullable(),
  location: Yup.string().required('required'),
  notes: Yup.string().nullable(),
  team: Yup.string().nullable(),
  engagement: Yup.mixed().oneOf(Object.values(Engagement)).required('required'),
  // dateAsctivated: Yup.date().required('required'),
});
