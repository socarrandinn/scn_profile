import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { EmployeeService } from 'modules/rrhh/employee/services';
import { EMPLOYEES_LIST_KEY } from 'modules/rrhh/employee/constants';

export const useFindEmployees = () => {
  const { fetch, queryKey } = useTableRequest(EmployeeService.search);

  return useQuery([EMPLOYEES_LIST_KEY, queryKey], fetch);
};
