import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_GLOBAL_CENTER_KEY } from 'modules/sales/settings/home-delivery/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useShippingCenterStatus = (value: boolean, id: string, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('manufacture');
  return useMutation(() => HomeDeliveryService.toggleStatus(value, id), {
    onSuccess: (data) => {
      toast.success(t('statusSuccessUpdate'));
      onClose?.();
      queryClient.invalidateQueries([HOME_DELIVERIES_GLOBAL_CENTER_KEY]);
    },
  });
};
