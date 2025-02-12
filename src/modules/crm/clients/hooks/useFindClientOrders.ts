import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';

export const useFindClientOrders = (clientId: string) => {
  const filters = useMemo(() => new TermFilter({ field: 'owner', value: clientId, objectId: true }), [clientId]);
  const { fetch, queryKey } = useTableRequest(PaidOrderService.search, filters);

  return useQuery([PAID_ORDERS_LIST_KEY, queryKey, clientId], fetch);
};
