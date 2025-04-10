import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { SubOrderService } from '../services';
import { SUB_ORDERS_DISPATCH_LIST_KEY, SUB_ORDERS_LIST_KEY } from '../constants/sub-order.queries';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useDispatchDetail } from 'modules/sales/dispatch/contexts/dispatchContext';

export const useFindSubOrders = () => {
  const { fetch, queryKey, filters, search } = useTableRequest(SubOrderService.search);

  const query = useQuery([SUB_ORDERS_LIST_KEY, queryKey], fetch);

  return {
    ...query,
    filters,
    search,
  };
};

export const useFindDispatchSubOrders = () => {
  const { dispatch } = useDispatchDetail();

  /* filter order by dispatch */
  const filters = useMemo(
    () => new TermFilter({ field: 'dispatch', value: dispatch?._id, objectId: true }),
    [dispatch?._id],
  );

  const { fetch, queryKey } = useTableRequest(SubOrderService.search, filters);

  return useQuery([SUB_ORDERS_DISPATCH_LIST_KEY, queryKey], fetch, { enabled: !!dispatch?._id });
};
