import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ExpressDeliveryService } from 'modules/sales/settings/express-delivery/services';
import { EXPRESS_DELIVERIES_LIST_KEY } from 'modules/sales/settings/express-delivery/constants';

export const useFindExpressDeliveries = () => {
  const { fetch, queryKey } = useTableRequest(ExpressDeliveryService.search);

  return useQuery([EXPRESS_DELIVERIES_LIST_KEY, queryKey], fetch);
};
