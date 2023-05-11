import { CommonIntervalsEnum, IntervalEnum } from 'modules/rrhh/settings/time-off-policies/constants/interval.enum';

export interface ITimeOffPolicyType {
  _id?: string;
  name: string;
  color: string;
  logType: CommonIntervalsEnum;
  showInCalendar: boolean;
}

export type ITimeOffPolicyTypes = ITimeOffPolicyType[];

export interface ITimeOffPolicies {
  name: string;
  icon: string;
  description?: string;
  type: string;
  isPaid: boolean;
  needApproval: boolean;
  coverAmount: number | string;
  accumulate: {
    isAccumulative: boolean;
    value: number;
    interval: IntervalEnum;
  };
  rules: {
    limitTimeRule: {
      value: number;
      valueInterval: CommonIntervalsEnum;
      interval: IntervalEnum;
    };
    startApplyRuler: {
      value: number;
      valueInterval: CommonIntervalsEnum;
    };
  };
}
