import { ITimeOffPolicyType } from 'modules/inventory/product/settings/time-off-policies/interfaces';
import { CommonIntervalsEnum } from 'modules/inventory/product/settings/time-off-policies/constants/interval.enum';

export const timeOffPolicyTypeInitValues: ITimeOffPolicyType = {
  name: '',
  color: '',
  logType: CommonIntervalsEnum.hours,
  showInCalendar: true,
};
