// import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { WAREHOUSES_LIST_KEY } from '../constants';

export const useFindWarehousesByIds = (warehousesIds: string[]) => {
  const filter = useMemo(() => {
    return new TermFilter({ type: 'IN', field: '_id', value: warehousesIds });
  }, [warehousesIds]);

  const { fetch, queryKey } = useTableRequest(WarehouseService.search, filter);

  return useQuery([PRODUCTS_WAREHOUSE_LIST_KEY, WAREHOUSES_LIST_KEY, queryKey], fetch);
};
