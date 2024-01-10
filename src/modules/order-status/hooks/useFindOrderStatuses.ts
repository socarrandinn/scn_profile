import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { OrderStatusService } from 'modules/order-status/services';
import { ORDER_STATUSES_LIST_KEY } from 'modules/order-status/constants';

export const useFindOrderStatuses = () => {
  const { fetch, queryKey } = useTableRequest(OrderStatusService.search);

  return useQuery([ORDER_STATUSES_LIST_KEY, queryKey], fetch);
};
