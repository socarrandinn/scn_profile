import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PreOrderService } from 'modules/sales/pre-order/services';
import { PRE_ORDERS_LIST_KEY } from '../constants/pre-order.queries';

export const useFindAllPreOrders = () => {
  const { fetch, queryKey } = useTableRequest(PreOrderService.search);

  return useQuery([PRE_ORDERS_LIST_KEY, queryKey], fetch);
};
