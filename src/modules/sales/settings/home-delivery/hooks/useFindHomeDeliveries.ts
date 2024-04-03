import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_KEY } from 'modules/sales/settings/home-delivery/constants';

export const useFindHomeDeliveries = () => {
  const { fetch, queryKey } = useTableRequest(HomeDeliveryService.search);

  return useQuery([HOME_DELIVERIES_KEY, queryKey], fetch);
};
