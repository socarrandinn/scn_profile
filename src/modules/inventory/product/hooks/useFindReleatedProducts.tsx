import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductService } from 'modules/inventory/product/services';
import { RELEATED_PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

export const useFindReleatedProducts = () => {
  const { id, product } = useProductDetail();

  const filter = useMemo(() => {
    const storeFilter = { field: 'stock.store', value: product?.related };
    return new TermFilter(storeFilter);
  }, [product?.related]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([RELEATED_PRODUCTS_LIST_KEY, queryKey], fetch, {
    enabled: !!id,
  });

  return {
    ...query,
    filters,
  };
};
