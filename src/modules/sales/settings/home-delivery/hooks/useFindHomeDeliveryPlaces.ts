import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';

export const useFindHomeDeliveryPlaces = () => {
  const { fetch, queryKey } = useTableRequest(HomeDeliveryPlacesService.search);

  return useQuery([HOME_DELIVERIES_PLACES_KEY, queryKey], fetch);
};
