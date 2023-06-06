import { useQuery } from '@tanstack/react-query';
import { EmployeeService } from 'modules/rrhh/employee/management/services';
import { EMPLOYEES_ONE_KEY } from 'modules/rrhh/employee/management/constants';
import { useCallback } from 'react';
import { IEmployee } from 'modules/rrhh/employee/common/interfaces';

export const useFindOneEmployee = (id: string | null) => {
  const fetch = useCallback(() => EmployeeService.getOne(id as string), [id]);
  return useQuery<IEmployee>([EMPLOYEES_ONE_KEY, id], fetch, { enabled: !!id });
};
