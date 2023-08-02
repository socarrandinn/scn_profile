import { ITimeOffPolicies } from 'modules/store/product/settings/time-off-policies/interfaces';
import { CommonIntervalsEnum, IntervalEnum } from 'modules/store/product/settings/time-off-policies/constants/interval.enum';

export const timeOffPolicyInitValues: ITimeOffPolicies = {
  name: '',
  icon: '',
  description: '',
  type: null,
  isPaid: true,
  needApproval: true,
  showSummary: true,
  order: 1,
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
    },
    startApplyRuler: {
      value: 0,
      valueInterval: CommonIntervalsEnum.hours,
    },
  },
};
