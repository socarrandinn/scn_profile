// import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { STORES_PRODUCT_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';

export const useFindStoresByIds = (storesIds: string[]) => {
  const filter = useMemo(() => {
    return new TermFilter({ type: 'IN', field: '_id', value: storesIds });
  }, [storesIds]);

  const { fetch, queryKey } = useTableRequest(WarehouseService.search, filter);

  return useQuery([STORES_PRODUCT_LIST_KEY, queryKey], fetch);
};
