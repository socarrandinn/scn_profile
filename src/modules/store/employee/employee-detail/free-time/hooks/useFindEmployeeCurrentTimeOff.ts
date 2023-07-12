import { useQuery } from '@tanstack/react-query';
import { EMPLOYEE_TIME_OFF_LIST_KEY } from 'modules/store/employee/management/constants/queries';
import { EmployeeTimeOffService } from 'modules/store/employee/employee-detail/free-time/services';

export const useFindEmployeeCurrentTimeOff = (employeeId: string) => {
  return useQuery([EMPLOYEE_TIME_OFF_LIST_KEY, employeeId], () => EmployeeTimeOffService.searchCurrent(employeeId), {
    enabled: !!employeeId && employeeId !== 'undefined',
  });
};
