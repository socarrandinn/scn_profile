import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { StoreAreaService } from 'modules/inventory/settings/store-area/services';
import { STORE_AREAS_LIST_KEY } from 'modules/inventory/settings/store-area/constants';

export const useFindStoreAreas = () => {
  const { fetch, queryKey } = useTableRequest(StoreAreaService.search);

  return useQuery([STORE_AREAS_LIST_KEY, queryKey], fetch);
};
