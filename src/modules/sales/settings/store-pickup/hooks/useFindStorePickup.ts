import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { STORE_PICKUP_ONE_KEY } from '../constants';
import { StorePickupService } from '../services';

export const useFindStorePickup = () => {
  const { fetch, queryKey } = useTableRequest(StorePickupService.getStorePickup);

  return useQuery([STORE_PICKUP_ONE_KEY, queryKey], fetch);
};
