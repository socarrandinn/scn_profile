import { ITimeOffPolicyType } from 'modules/store/employee/settings/time-off-policies/interfaces';
import { CommonIntervalsEnum } from 'modules/store/employee/settings/time-off-policies/constants/interval.enum';

export const timeOffPolicyTypeInitValues: ITimeOffPolicyType = {
  name: '',
  color: '',
  logType: CommonIntervalsEnum.hours,
  showInCalendar: true,
};
