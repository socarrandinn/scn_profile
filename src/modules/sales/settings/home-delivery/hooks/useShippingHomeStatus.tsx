import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_GLOBAL_KEY } from 'modules/sales/settings/home-delivery/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useShippingHomeStatus = (value: boolean, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('manufacture');
  return useMutation(() => HomeDeliveryService.toggleStatus(value), {
    onSuccess: (data) => {
      toast.success(t('statusSuccessUpdate'));
      onClose?.();
      queryClient.invalidateQueries([HOME_DELIVERIES_GLOBAL_KEY]);
    },
  });
};
