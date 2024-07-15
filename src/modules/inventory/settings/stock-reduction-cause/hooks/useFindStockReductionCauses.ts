import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { StockReductionCauseService } from 'modules/inventory/settings/stock-reduction-cause/services';
import { STOCK_REDUCTION_CAUSES_LIST_KEY } from 'modules/inventory/settings/stock-reduction-cause/constants';

export const useFindStockReductionCauses = () => {
  const { fetch, queryKey } = useTableRequest(StockReductionCauseService.search);

  return useQuery([STOCK_REDUCTION_CAUSES_LIST_KEY, queryKey], fetch);
};
