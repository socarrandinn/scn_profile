import { useQuery } from '@tanstack/react-query';
import { EmployeeTimeOffService } from 'modules/rrhh/employee/management/services';
import { EMPLOYEE_TIME_OFF_LIST_KEY } from 'modules/rrhh/employee/management/constants/queries';

export const useFindEmployeeTimeOff = (employeeId: string) => {
  return useQuery([EMPLOYEE_TIME_OFF_LIST_KEY, employeeId], () => EmployeeTimeOffService.search(employeeId), {
    enabled: !!employeeId && employeeId !== 'undefined',
  });
};
