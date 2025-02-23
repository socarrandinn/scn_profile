import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { RECONCILIATION_ADJUSTMENT_LIST_KEY } from '../constants/reconciliation-adjustment.query-keys';
import { ReconciliationAdjustmentService } from '../services';

export const useFindReconciliationAdjustment = (filter?: any) => {
  const { fetch, queryKey, filters, search } = useTableRequest(ReconciliationAdjustmentService.search, filter);
  const query = useQuery([RECONCILIATION_ADJUSTMENT_LIST_KEY, queryKey], fetch);
  return {
    ...query,
    isLoading: query.isLoading,
    filters,
    search,
  };
};
