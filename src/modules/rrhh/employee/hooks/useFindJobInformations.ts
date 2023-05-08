import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { EmployeeJobInformationService } from 'modules/rrhh/employee/services';
import { EMPLOYEE_JOB_INFORMATION_LIST_KEY } from 'modules/rrhh/employee/constants/queries';

export const useFindEmployeeJobInformation = (employeeId: string) => {
  const { fetch, queryKey } = useTableRequest(() => EmployeeJobInformationService.search(employeeId));

  return useQuery([EMPLOYEE_JOB_INFORMATION_LIST_KEY, queryKey, employeeId], fetch, {
    enabled: !!employeeId && employeeId !== 'undefined',
  });
};
