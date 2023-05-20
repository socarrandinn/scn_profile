import { Engagement } from 'modules/rrhh/employee/management/constants';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';
import { ITeam } from 'modules/rrhh/team/interfaces';

export interface JobInformation {
  position: string | null;
  reported?: string | null;
  location: string | null;
  team: string | null;
  changeReason?: string | null;
  notes?: string;
  engagement: Engagement;

  dateActivated?: Date;
  endActivated?: Date;
  active: boolean;
}

export interface CurrentJobInformation {
  position: IJobPosition;
  team: ITeam;
  reported?: string | null;
  engagement: Engagement;
  active: boolean;
}
