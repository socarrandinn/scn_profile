import { useQuery } from '@tanstack/react-query';
import { StockReductionCauseService } from 'modules/inventory/settings/stock-reduction-cause/services';
import { STOCK_REDUCTION_CAUSES_ONE_KEY } from 'modules/inventory/settings/stock-reduction-cause/constants';
import { useCallback } from 'react';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';

export const useFindOneStockReductionCause = (id: string | null) => {
  const fetch = useCallback(() => StockReductionCauseService.getOne(id as string), [id]);
  return useQuery<IStockReductionCause>([id, STOCK_REDUCTION_CAUSES_ONE_KEY], fetch, { enabled: !!id });
};
