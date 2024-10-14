import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { isObject } from 'lodash';
import { IProduct } from '../interfaces/IProduct';
import { ProductService } from '../services';
import { PRODUCTS_ONE_KEY } from '../constants';

interface ICodeProduct {
  data: {
    product: IProduct;
    stock: number;
  };
}

export const useFindOneCodeProducts = (code: string | null, warehouses: string) => {
  const fetch = useCallback(() => ProductService.productCode(code as string, warehouses), [code, warehouses]);
  return useQuery<ICodeProduct>([code, warehouses, PRODUCTS_ONE_KEY], fetch, {
    enabled: !!code && !!warehouses && !isObject(code),
  });
};
