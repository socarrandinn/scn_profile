import { useQuery } from '@tanstack/react-query';
import { AnalyticService } from 'modules/rrhh/analytic/services';
import { ANALYTICS_CATEGORY_GENERAL_KEY, ANALYTICS_GENERAL_KEY } from 'modules/rrhh/analytic/constants';
import { useCallback } from 'react';
import { IGeneralSummary } from 'modules/rrhh/analytic/interfaces';
import { useDashboardFilter } from 'components/libs/analytic/hooks/useDashboardFilter';

export const useFindCategoryDistribution = () => {
  const payload = useDashboardFilter()
  const fetch = useCallback(() => AnalyticService.categoryDistribution(payload), [payload]);
  return useQuery([ANALYTICS_GENERAL_KEY, ANALYTICS_CATEGORY_GENERAL_KEY, payload], fetch, {
    refetchInterval: 30000,
    staleTime: 10000
  });
};
