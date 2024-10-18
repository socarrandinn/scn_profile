import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { PreOrderService } from '../services';
import { PRE_ORDERS_ONE_KEY } from '../constants/pre-order.queries';

export const useFindOnePreOrder = (id: string | null) => {
  const fetch = useCallback(() => PreOrderService.getOne(id as string), [id]);
  return useQuery<IOrder>([id, PRE_ORDERS_ONE_KEY], fetch, { enabled: !!id });
};
