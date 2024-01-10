import { useQuery } from '@tanstack/react-query';
import { ProductAnalyticService } from '../services';
import { ANALYTIC_STORES_DISTRIBUTION } from '../constants/query.keys';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindAnalyticStoreDistributions = () => {
  const { fetch, queryKey } = useTableRequest(ProductAnalyticService.storeDistributionSummary);

  return useQuery([ANALYTIC_STORES_DISTRIBUTION, queryKey], fetch);
};
