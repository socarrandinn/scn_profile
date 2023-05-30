import { useQuery } from '@tanstack/react-query';
import { AnalyticService } from 'modules/rrhh/analytic/services';
import { ANALYTICS_GENERAL_KEY, ANALYTICS_TEAM_GENERAL_KEY } from 'modules/rrhh/analytic/constants';
import { useCallback } from 'react';
import { useDashboardFilter } from 'components/libs/analytic/hooks/useDashboardFilter';

export const useFindTeamDistribution = () => {
  const payload = useDashboardFilter()
  const fetch = useCallback(() => AnalyticService.teamDistribution(payload), [payload]);
  return useQuery([ANALYTICS_GENERAL_KEY, ANALYTICS_TEAM_GENERAL_KEY, payload], fetch, {
    refetchInterval: 30000,
    staleTime: 10000
  });
};
