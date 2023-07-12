import { useQuery } from '@tanstack/react-query';
import {
  EMPLOYEE_TIME_OFF_HISTORY_LIST_KEY
} from 'modules/store/employee/management/constants/queries';
import { EmployeeTimeOffService } from 'modules/store/employee/employee-detail/free-time/services';

export const UseFindEmployeeHistoryTimeOff = (employeeId: string) => {
  return useQuery([EMPLOYEE_TIME_OFF_HISTORY_LIST_KEY, employeeId], () => EmployeeTimeOffService.searchHistory(employeeId), {
    enabled: !!employeeId,
  });
};
