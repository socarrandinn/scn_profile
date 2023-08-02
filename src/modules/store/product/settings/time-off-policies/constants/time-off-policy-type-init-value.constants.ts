import { ITimeOffPolicyType } from 'modules/store/product/settings/time-off-policies/interfaces';
import { CommonIntervalsEnum } from 'modules/store/product/settings/time-off-policies/constants/interval.enum';

export const timeOffPolicyTypeInitValues: ITimeOffPolicyType = {
  name: '',
  color: '',
  logType: CommonIntervalsEnum.hours,
  showInCalendar: true,
};
