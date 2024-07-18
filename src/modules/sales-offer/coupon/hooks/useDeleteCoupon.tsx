import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OfferOrderService } from 'modules/sales-offer/offer/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { COUPON_LIST_KEY } from '../constants/coupon.queries';

export const useDeleteCoupon = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('couponOrder');
  return useMutation(() => OfferOrderService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([COUPON_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
