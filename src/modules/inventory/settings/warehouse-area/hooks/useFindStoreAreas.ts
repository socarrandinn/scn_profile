import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { WAREHOUSE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';

export const useFindStoreAreas = () => {
  const { fetch, queryKey } = useTableRequest(WarehouseAreaService.search);

  return useQuery([WAREHOUSE_AREAS_LIST_KEY, queryKey], fetch);
};
