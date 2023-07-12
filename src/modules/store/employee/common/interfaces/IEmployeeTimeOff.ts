import { ICommonDomain } from 'modules/common/interfaces';
import { TimeOffStatusEnum } from 'modules/store/employee/employee-detail/free-time/constants/timeoffStatus.enum';
import { ITimeOffPolicies } from 'modules/store/employee/settings/time-off-policies/interfaces';
import { IEmployee } from 'modules/store/employee/common/interfaces/IEmployee';
import { IUser } from 'modules/security/users/interfaces/IUser';

export interface IEmployeeTimeOffStat extends ICommonDomain {
  accumulated: number;
  consumption: number;
  canApply: boolean;
  employee: IEmployee | string;
  policy?: ITimeOffPolicies | string ;
  createdAt: string;
  updatedAt?: string;
  status: TimeOffStatusEnum;
  year: number;
  yearly: number;
}

export interface IEmployeeTimeOff extends ICommonDomain {
  policy?: ITimeOffPolicies | string | null;
  employee: IEmployee | string;
  handledBy?: IUser | string;
  startDate: string;
  endDate: string;
  consumption?: number;
  status: TimeOffStatusEnum;
}
