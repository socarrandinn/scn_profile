import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { PRODUCTS_LIST_KEY } from '../constants';
import { StocksService } from '../services';

export const useProductStock = (id: string, warehouseId: string, havePermission: boolean = true) => {
  const fetch = useCallback(() => StocksService.getStocks(id, warehouseId), [id, warehouseId]);

  const shouldFetch = !!id && !!warehouseId && havePermission;
  return useQuery([PRODUCTS_LIST_KEY, id, warehouseId], fetch, { enabled: shouldFetch });
};

export const useProductFullStock = (id: string) => {
  const fetch = useCallback(() => StocksService.getFullStocks(id), [id]);

  return useQuery([id, PRODUCTS_LIST_KEY], fetch, { enabled: !!id });
};
