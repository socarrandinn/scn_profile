import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { COUPON_LIST_KEY } from '../constants/coupon.queries';
import { CouponOrderService } from '../services';

export const useFindCoupons = () => {
  const { fetch, queryKey } = useTableRequest(CouponOrderService.search);

  return useQuery([COUPON_LIST_KEY, queryKey], fetch);
};
