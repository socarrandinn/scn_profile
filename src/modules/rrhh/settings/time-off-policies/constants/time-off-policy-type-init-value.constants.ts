import { ITimeOffPolicyType } from 'modules/rrhh/settings/time-off-policies/interfaces';
import { CommonIntervalsEnum } from 'modules/rrhh/settings/time-off-policies/constants/interval.enum';

export const timeOffPolicyTypeInitValues: ITimeOffPolicyType = {
  name: '',
  color: '',
  logType: CommonIntervalsEnum.hours,
  showInCalendar: true,
};
