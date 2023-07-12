import { useQuery } from '@tanstack/react-query';
import { EMPLOYEE_TIME_OFF_STATS_KEY } from 'modules/store/employee/management/constants/queries';
import EmployeeTimeOffStatService
  from 'modules/store/employee/employee-detail/free-time/services/employee-time-off.service';

export const useFindEmployeeTimeOffStats = (employeeId: string) => {
  return useQuery(
    [EMPLOYEE_TIME_OFF_STATS_KEY, employeeId],
    () => EmployeeTimeOffStatService.searchEmployeeAccumulatedTimeOff(employeeId, {
      filters: {
        showSummary: true
      },
      populate: true,
      sort: { order: -1 }
    }),
    {
      enabled: !!employeeId
    },
  );
};
