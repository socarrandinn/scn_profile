import { useQuery } from '@tanstack/react-query';
import { ProductsService } from 'modules/provider/products/services';
import { PRODUCTS_ONE_KEY } from 'modules/provider/products/constants';
import { useCallback } from 'react';
import { IProducts } from 'modules/provider/products/interfaces';

export const useFindOneProducts = (id: string | null) => {
  const fetch = useCallback(() => ProductsService.getOne(id as string), [id]);
  return useQuery<IProducts>([id, PRODUCTS_ONE_KEY], fetch, { enabled: !!id });
};
