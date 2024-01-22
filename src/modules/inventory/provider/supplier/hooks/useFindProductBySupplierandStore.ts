import { useMemo } from 'react';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_STORE_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { useParams } from 'react-router';
import { useStoreContext } from 'modules/inventory/provider/supplier/context/StoreProvider';

export const useFindProductBySupplierAndStore = () => {
  const { id: providerId } = useParams();
  const { storeId } = useStoreContext();

  const filter = useMemo(() => {
    return new OperatorFilter({
      type: 'AND',
      filters: [
        new TermFilter({ field: 'stock.store', value: storeId }),
        new TermFilter({ field: 'providers.supplier.providerId', value: providerId }),
      ],
    });
  }, [storeId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_STORE_LIST_KEY, queryKey], fetch, {
    enabled: !!storeId,
  });

  return {
    ...query,
    filters,
  };
};
