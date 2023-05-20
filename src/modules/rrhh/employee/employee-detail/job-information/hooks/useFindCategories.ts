import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { EmployeeCategoryService } from 'modules/rrhh/employee/management/services';
import { EMPLOYEE_CATEGORY_LIST_KEY } from 'modules/rrhh/employee/management/constants/queries';

export const useFindEmployeeCategories = (employeeId: string) => {
  const { fetch, queryKey } = useTableRequest(() => EmployeeCategoryService.search(employeeId));

  return useQuery([EMPLOYEE_CATEGORY_LIST_KEY, queryKey, employeeId], fetch, {
    enabled: !!employeeId && employeeId !== 'undefined',
  });
};
