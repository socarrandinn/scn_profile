import { useQuery } from '@tanstack/react-query';
import { ProductsService } from 'modules/inventory/provider/products/services';
import { PRODUCTS_ONE_KEY } from 'modules/inventory/provider/products/constants';
import { useCallback } from 'react';
import { IProducts } from 'modules/inventory/provider/products/interfaces';

export const useFindOneProducts = (id: string | null) => {
  const fetch = useCallback(() => ProductsService.getOne(id as string), [id]);
  return useQuery<IProducts>([id, PRODUCTS_ONE_KEY], fetch, { enabled: !!id });
};
