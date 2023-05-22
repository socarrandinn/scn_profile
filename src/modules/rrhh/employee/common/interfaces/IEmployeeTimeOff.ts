import { ICommonDomain } from 'modules/common/interfaces';
import { TimeOffStatusEnum } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoffStatus.enum';

export interface IEmployeeTimeOffStat extends ICommonDomain {
  policy: {
    name: string;
    icon?: string;
  };
  accumulated: number;
  consumption: number;
  canApply: boolean;
  yearly: number;
  employee: string;
}

export interface IEmployeeTimeOff extends ICommonDomain {
  policy: {
    name: string;
    icon?: string;
  };
  amount: number;
  startDate: string;
  endDate: string;
  status: TimeOffStatusEnum;
}
