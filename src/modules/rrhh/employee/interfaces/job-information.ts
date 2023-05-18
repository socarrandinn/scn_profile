import { Engagement } from 'modules/rrhh/employee/constants';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';

export interface JobInformation {
  position: string | null;
  reported?: string | null;
  location: string | null;
  notes?: string;
  engagement: Engagement;

  dateActivated?: Date;
  active: boolean;
}

export interface CurrentJobInformation {
  position: IJobPosition;
  reported?: string | null;
  engagement: Engagement;
  active: boolean;
}
