import { Engagement } from 'modules/rrhh/employee/constants';

export interface JobInformation {
  position: string | null;
  reported?: string | null;
  location: string | null;
  notes?: string;
  engagement: Engagement;

  dateActivated?: Date;
}
