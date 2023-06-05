import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TeamService } from 'modules/rrhh/team/services';
import { TEAMS_LIST_KEY } from 'modules/rrhh/team/constants';

export const useFindTeams = () => {
  const { fetch, queryKey } = useTableRequest(TeamService.searchWithPopulate);

  return useQuery([TEAMS_LIST_KEY, queryKey], fetch);
};
