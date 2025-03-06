import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';

export const useFindPaidOrders = () => {
  const { fetch, queryKey, filters } = useTableRequest(PaidOrderService.search);

  const query = useQuery([PAID_ORDERS_LIST_KEY, queryKey], fetch);

  return {
    ...query,
    filters,
  };
};
