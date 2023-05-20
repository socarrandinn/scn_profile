import { useQuery } from '@tanstack/react-query';
import { EmployeeService } from 'modules/rrhh/employee/management/services';
import { EMPLOYEES_ONE_KEY } from 'modules/rrhh/employee/management/constants';
import { useCallback } from 'react';
import { IEmployee } from 'modules/rrhh/employee/management/interfaces';

export const useFindOneEmployee = (id: string | null) => {
  const fetch = useCallback(() => EmployeeService.getOne(id as string), [id]);
  return useQuery<IEmployee>([id, EMPLOYEES_ONE_KEY], fetch, { enabled: !!id });
};
