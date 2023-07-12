import { Engagement } from 'modules/store/employee/management/constants';
import { IJobPosition } from 'modules/store/employee/settings/job-position/interfaces';
import { ITeam } from 'modules/store/employee/team/interfaces';
import { IEmployeeGeneralInfo } from 'modules/store/employee/common/interfaces/general-info';

export interface ILocation {
  _id: string;
  name: string;
}

export interface JobInformation {
  position: string | null;
  reported?: string | null;
  location: ILocation | null;
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
  reported?:
  | string
  | null
  | {
    general: IEmployeeGeneralInfo;
  };
  engagement: Engagement;
  active: boolean;
}
