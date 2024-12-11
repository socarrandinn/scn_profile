import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { SupplierService } from '../services';

export const useFindSupplierProducts = (supplierId: string | undefined) => {
  const { fetch, queryKey, filters, search } = useTableRequest((params, config) =>
    SupplierService.productSearch({ ...params, supplierId }, config),
  );
  const query = useQuery([PRODUCTS_LIST_KEY, queryKey, supplierId], fetch, {
    enabled: !!supplierId,
  });

  return {
    ...query,
    filters,
    search
  };
};
