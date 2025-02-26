import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ExpressDeliveryPlacesService } from 'modules/sales/settings/express-delivery/services';
import { EXPRESS_DELIVERIES_LIST_KEY } from 'modules/sales/settings/express-delivery/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteExpressDelivery = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('expressDelivery');
  return useMutation(() => ExpressDeliveryPlacesService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([EXPRESS_DELIVERIES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
