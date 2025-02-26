import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { useMemo } from 'react';
import { InFilter } from '@dofleini/query-builder';
import { isArray } from 'lodash';

export const useFindProducts = () => {
  const { fetch, queryKey, search, filters } = useTableRequest(ProductService.searchClean);

  const query = useQuery([PRODUCTS_LIST_KEY, queryKey, filters], fetch);

  return {
    ...query,
    search,
    filters,
  };
};

export const useFindProductsByIds = (products: string[]) => {
  const filters = useMemo(
    () => new InFilter({ field: '_id', value: isArray(products) ? products : [products] }),
    [products],
  );
  const { fetch, queryKey } = useTableRequest(ProductService.search, filters);
  return useQuery([PRODUCTS_LIST_KEY, queryKey, products], fetch);
};
