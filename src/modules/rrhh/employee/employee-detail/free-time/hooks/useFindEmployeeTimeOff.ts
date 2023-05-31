import { useQuery } from '@tanstack/react-query';
import { EMPLOYEE_TIME_OFF_LIST_KEY } from 'modules/rrhh/employee/management/constants/queries';
import { EmployeeTimeOffService } from 'modules/rrhh/employee/employee-detail/free-time/services';

export const useFindEmployeeTimeOff = (employeeId: string) => {
  return useQuery([EMPLOYEE_TIME_OFF_LIST_KEY, employeeId], () => EmployeeTimeOffService.search(employeeId), {
    enabled: !!employeeId && employeeId !== 'undefined',
  });
};
