import { ICommonDomain } from 'modules/common/interfaces';
import { TimeOffStatusEnum } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoffStatus.enum';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';

export interface IEmployeeTimeOffStat extends ICommonDomain {
  policy: ITimeOffPolicies;
  accumulated: number;
  consumption: number;
  canApply: boolean;
  yearly: number;
  employee: string;
}

export interface IEmployeeTimeOff extends ICommonDomain {
  employee: string;
  policy?: ITimeOffPolicies;
  startDate: string;
  endDate: string;
  status: TimeOffStatusEnum;
}
