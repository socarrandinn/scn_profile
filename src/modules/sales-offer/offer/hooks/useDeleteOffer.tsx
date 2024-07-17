import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OfferOrderService } from 'modules/sales-offer/offer/services';
import { OFFERS_LIST_KEY } from 'modules/sales-offer/offer/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteOffer = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('offerOrder');
  return useMutation(() => OfferOrderService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([OFFERS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
