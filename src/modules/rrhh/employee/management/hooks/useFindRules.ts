import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { EmployeeRulesService } from 'modules/rrhh/employee/management/services';
import { EMPLOYEE_RULE_LIST_KEY, EMPLOYEE_RULE_TYPES_LIST_KEY } from 'modules/rrhh/employee/management/constants/queries';

export const useFindEmployeeRules = () => {
  const { fetch, queryKey } = useTableRequest(EmployeeRulesService.search);

  return useQuery([EMPLOYEE_RULE_LIST_KEY, queryKey], fetch);
};

export const useFindEmployeeRuleTypes = () => {
  const { fetch, queryKey } = useTableRequest(EmployeeRulesService.searchTypes);

  return useQuery([EMPLOYEE_RULE_TYPES_LIST_KEY, queryKey], fetch);
};
