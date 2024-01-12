import { useQuery } from '@tanstack/react-query';
import { OrderStatusService } from 'modules/orders/settings/order-status/services';
import { ORDER_STATUSES_ONE_KEY } from 'modules/orders/settings/order-status/constants';
import { useCallback } from 'react';
import { IOrderStatus } from 'modules/orders/settings/order-status/interfaces';

export const useFindOneOrderStatus = (id: string | null) => {
  const fetch = useCallback(() => OrderStatusService.getOne(id as string), [id]);
  return useQuery<IOrderStatus>([id, ORDER_STATUSES_ONE_KEY], fetch, { enabled: !!id });
};
