import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { STORES_PROVIDER_SUPPLIER_LIST_KEY } from 'modules/inventory/warehouse/constants';
/* import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react'; */
import { SupplierService } from 'modules/inventory/provider/supplier/services';

export const useFindSupplierByStore = (storeId: string) => {
  // todo
  /* const filters = useMemo(() => {
    return new TermFilter({ type: 'TERM', field: 'store', value: storeId });
  }, [storeId]); */

  const { fetch, queryKey } = useTableRequest(SupplierService.search /* filters */);

  return useQuery([STORES_PROVIDER_SUPPLIER_LIST_KEY, queryKey], fetch /*  { enabled: !!storeId } */);
};
