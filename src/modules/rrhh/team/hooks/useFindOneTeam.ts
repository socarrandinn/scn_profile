import { useQuery } from '@tanstack/react-query';
import { TeamService } from 'modules/rrhh/team/services';
import { TEAMS_ONE_KEY } from 'modules/rrhh/team/constants';
import { useCallback } from 'react';
import { ITeam } from 'modules/rrhh/team/interfaces';

export const useFindOneTeam = (id: string | null) => {
  const fetch = useCallback(() => TeamService.getOne(id as string), [id]);
  return useQuery<ITeam>([id, TEAMS_ONE_KEY], fetch, { enabled: !!id });
};
