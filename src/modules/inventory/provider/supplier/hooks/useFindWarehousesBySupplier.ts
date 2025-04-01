import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { SupplierService } from '../services';
import { SUPPLIER_WAREHOUSE_LIST_KEY } from '../constants';

export const useFindWarehousesBySupplier = (supplierId: string) => {
  const { fetch, queryKey, filters, search } = useTableRequest((params, config) =>
    SupplierService.searchWarehouses({ ...params, supplierId }, config),
  );
  const query = useQuery([SUPPLIER_WAREHOUSE_LIST_KEY, queryKey, supplierId], fetch, {
    enabled: !!supplierId,
  });

  return {
    ...query,
    filters,
    search,
  };
};
