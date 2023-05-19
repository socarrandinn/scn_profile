import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import { CommonIntervalsEnum, IntervalEnum } from 'modules/rrhh/settings/time-off-policies/constants/interval.enum';

export const timeOffPolicyInitValues: ITimeOffPolicies = {
  name: '',
  icon: '',
  description: '',
  type: null,
  isPaid: true,
  needApproval: true,
  coverAmount: 'none',
  accumulate: {
    isAccumulative: true,
    value: 0,
    interval: IntervalEnum.day,
  },
  rules: {
    limitTimeRule: {
      value: 0,
      valueInterval: CommonIntervalsEnum.hours,
      interval: IntervalEnum.year,
    },
    startApplyRuler: {
      value: 0,
      valueInterval: CommonIntervalsEnum.hours,
    },
  },
};
