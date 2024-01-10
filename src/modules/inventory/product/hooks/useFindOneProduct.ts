import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_ONE_KEY } from 'modules/inventory/product/constants';
import { useCallback } from 'react';
import { IProduct } from 'modules/inventory/common/interfaces';

export const useFindOneProduct = (id: string | null) => {
  const fetch = useCallback(() => ProductService.getOne(id as string), [id]);
  return useQuery<IProduct>([id, PRODUCTS_ONE_KEY], fetch, { enabled: !!id });
};
