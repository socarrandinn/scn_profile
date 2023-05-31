import { useQuery } from '@tanstack/react-query';
import { EMPLOYEE_TIME_OFF_STATS_KEY } from 'modules/rrhh/employee/management/constants/queries';
import EmployeeTimeOffStatService from 'modules/rrhh/employee/employee-detail/free-time/services/employee-time-off.service';

export const useFindEmployeeTimeOffStats = (employeeId: string, params: Record<string, any> = {}) => {
  return useQuery(
    [EMPLOYEE_TIME_OFF_STATS_KEY, employeeId],
    () => EmployeeTimeOffStatService.searchEmployeeAccommulatedTimeOff(employeeId, { ...params, populate: true }),
    {
      enabled: !!employeeId
    },
  );
};
