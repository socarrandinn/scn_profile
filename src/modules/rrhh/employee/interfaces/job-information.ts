import { Engagement } from 'modules/rrhh/employee/constants';

export interface JobInformation {
  position: string;
  reported?: string;
  location: string;
  notes?: string;
  engagement: Engagement;

  // dateActivated: Yup.date().required('required'),
}
