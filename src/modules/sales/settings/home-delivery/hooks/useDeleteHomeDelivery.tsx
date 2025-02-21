import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HomeDeliveryPlacesService, HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_GLOBAL_KEY } from 'modules/sales/settings/home-delivery/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteHomeDelivery = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('homeDelivery');
  return useMutation(() => HomeDeliveryPlacesService.deleteHomeDelivery(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([HOME_DELIVERIES_GLOBAL_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
