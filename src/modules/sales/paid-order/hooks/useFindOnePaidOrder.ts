import { useQuery } from '@tanstack/react-query';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_ONE_KEY } from 'modules/sales/paid-order/constants';
import { useCallback } from 'react';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';

export const useFindOnePaidOrder = (id: string | null) => {
  const fetch = useCallback(() => PaidOrderService.getOne(id as string), [id]);
  return useQuery<IPaidOrder>([id, PAID_ORDERS_ONE_KEY], fetch, { enabled: !!id });
};
