import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { CouponOrderService } from '../services';
import { COUPON_ONE_KEY } from '../constants/coupon.queries';

export const useFindOneCoupon = (id: string | null) => {
  const fetch = useCallback(() => CouponOrderService.getOne(id as string), [id]);
  return useQuery<IOffer>([id, COUPON_ONE_KEY], fetch, { enabled: !!id });
};
