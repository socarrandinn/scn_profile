import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { SubOrderService } from '../services';
import { SUB_ORDERS_ONE_KEY } from '../constants/sub-order.queries';

export const useFindOneSubOrder = (id: string | null) => {
  const fetch = useCallback(() => SubOrderService.getOne(id as string), [id]);
  return useQuery<IOrder>([id, SUB_ORDERS_ONE_KEY], fetch, { enabled: !!id });
};
