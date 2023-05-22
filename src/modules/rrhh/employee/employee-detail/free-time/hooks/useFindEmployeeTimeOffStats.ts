import { useQuery } from '@tanstack/react-query';
import { EmployeeTimeOffService } from 'modules/rrhh/employee/management/services';
import { EMPLOYEE_TIME_OFF_STATS_KEY } from 'modules/rrhh/employee/management/constants/queries';

export const useFindEmployeeTimeOffStats = (employeeId: string) => {
  return useQuery([EMPLOYEE_TIME_OFF_STATS_KEY, employeeId], () => EmployeeTimeOffService.searchStats(employeeId), {
    enabled: !!employeeId && employeeId !== 'undefined',
  });
};
