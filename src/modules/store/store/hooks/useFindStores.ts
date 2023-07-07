import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { StoreService } from 'modules/store/store/services';
import { STORES_LIST_KEY } from 'modules/store/store/constants';

export const useFindStores = () => {
  const { fetch, queryKey } = useTableRequest(StoreService.search);

  return useQuery([STORES_LIST_KEY, queryKey], fetch);
};
