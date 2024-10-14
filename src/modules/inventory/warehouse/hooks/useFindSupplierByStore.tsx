import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WAREHOUSES_PROVIDER_SUPPLIER_LIST_KEY } from 'modules/inventory/warehouse/constants';
/* import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react'; */
import { SupplierService } from 'modules/inventory/provider/supplier/services';

export const useFindSupplierByStore = (warehouseId: string) => {
  // todo
  /* const filters = useMemo(() => {
    return new TermFilter({ type: 'TERM', field: 'warehouse', value: warehouseId });
  }, [warehouseId]); */

  const { fetch, queryKey } = useTableRequest(SupplierService.search /* filters */);

  return useQuery([WAREHOUSES_PROVIDER_SUPPLIER_LIST_KEY, queryKey], fetch /*  { enabled: !!warehouseId } */);
};
