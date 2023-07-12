import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { EmployeeCompensationService } from 'modules/store/employee/management/services';
import { EMPLOYEE_COMPENSATION_LIST_KEY } from 'modules/store/employee/management/constants/queries';

export const useFindEmployeeCompensations = (employeeId: string) => {
  const { fetch, queryKey } = useTableRequest(() => EmployeeCompensationService.search(employeeId));

  return useQuery([EMPLOYEE_COMPENSATION_LIST_KEY, queryKey, employeeId], fetch, {
    enabled: !!employeeId && employeeId !== 'undefined',
  });
};
