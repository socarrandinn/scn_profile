import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WAREHOUSES_SUPPLIER_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { WarehouseSupplierService } from '../services';
export const useFindWarehouseSupplier = (warehouseId: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    WarehouseSupplierService.searchSupplier(warehouseId, params, config),
  );

  return useQuery([WAREHOUSES_SUPPLIER_LIST_KEY, queryKey], fetch, { enabled: !!warehouseId });
};
