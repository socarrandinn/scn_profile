import { useQuery } from '@tanstack/react-query';
import { AnalyticService } from 'modules/rrhh/analytic/services';
import { ANALYTICS_AGE_GENERAL_KEY, ANALYTICS_GENERAL_KEY } from 'modules/rrhh/analytic/constants';
import { useCallback } from 'react';
import { useDashboardFilter } from 'components/libs/analytic/hooks/useDashboardFilter';

export const useFindAgeDistribution = () => {
  const payload = useDashboardFilter()
  const fetch = useCallback(() => AnalyticService.ageDistribution(payload), [payload]);
  return useQuery([ANALYTICS_GENERAL_KEY, ANALYTICS_AGE_GENERAL_KEY, payload], fetch, {
    refetchInterval: 30000,
    staleTime: 10000
  });
};
