import { useQuery } from '@tanstack/react-query';
import { EmployeeService } from 'modules/rrhh/employee/management/services';
import { useCallback } from 'react'

export const useFindEmployNew = () => {
  const fecht = useCallback(() => EmployeeService.getListNewEmploy(), []);
  return useQuery(['NEW_Employer'], fecht);
}
