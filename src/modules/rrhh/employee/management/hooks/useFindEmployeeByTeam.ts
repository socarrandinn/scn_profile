import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { EmployeeService } from 'modules/rrhh/employee/management/services';

export const useFindEmployeeByTeam = (teamId: string) => {
  const { fetch, queryKey } = useTableRequest(EmployeeService.search, {
    field: 'jobInformation.team._id',
    value: teamId,
    objectId: true,
  });

  return useQuery(['members', teamId, queryKey], fetch);
};
