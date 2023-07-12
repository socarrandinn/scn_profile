import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TeamService } from 'modules/store/employee/team/services';

export const useFindEmployeeByTeam = (teamId: string) => {
  const { fetch, queryKey } = useTableRequest((params) => TeamService.getMemberAllByidTeam(teamId, params));

  return useQuery(['members', teamId, queryKey], fetch);
};
