import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { SubOrderService } from '../services';
import { SUB_ORDERS_LIST_KEY } from '../constants/sub-order.queries';

export const useFindSubOrders = () => {
  const { fetch, queryKey, filters, search } = useTableRequest(SubOrderService.search);

  const query = useQuery([SUB_ORDERS_LIST_KEY, queryKey], fetch);

  return {
    ...query,
    filters,
    search,
  };
};
