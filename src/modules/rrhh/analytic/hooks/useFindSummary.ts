import { useQuery } from '@tanstack/react-query';
import { AnalyticService } from 'modules/rrhh/analytic/services';
import { ANALYTICS_GENERAL_KEY, ANALYTICS_SUMMARY_GENERAL_KEY } from 'modules/rrhh/analytic/constants';
import { useCallback } from 'react';
import { IGeneralSummary } from 'modules/rrhh/analytic/interfaces';
import { useDashboardFilter } from 'components/libs/analytic/hooks/useDashboardFilter';

export const useFindSummary = () => {
  const payload = useDashboardFilter()
  const fetch = useCallback(() => AnalyticService.summary(payload), [payload]);
  return useQuery<IGeneralSummary>([ANALYTICS_GENERAL_KEY, ANALYTICS_SUMMARY_GENERAL_KEY, payload], fetch, {
    refetchInterval: 30000,
    staleTime: 10000
  });
};
