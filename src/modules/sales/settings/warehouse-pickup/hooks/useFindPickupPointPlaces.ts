import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { STORE_PICKUP_PONIT_PLACES_KEY } from '../constants';
import { WarehousePickupService } from '../services';

export const useFindPickupPointPlaces = () => {
  const { fetch, queryKey } = useTableRequest(WarehousePickupService.getPointPlaces);

  return useQuery([STORE_PICKUP_PONIT_PLACES_KEY, queryKey], fetch);
};
