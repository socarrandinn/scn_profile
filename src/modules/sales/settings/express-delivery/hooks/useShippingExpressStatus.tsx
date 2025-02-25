import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { ExpressDeliveryService } from '../services';
import { EXPRESS_DELIVERIES_GLOBAL_KEY } from '../constants';
import toast from 'react-hot-toast';

export const useShippingExpressStatus = (value: boolean, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('manufacture');

  return useMutation(() => ExpressDeliveryService.toggleStatus(value), {
    onSuccess: (data) => {
      toast.success(t('statusSuccessUpdate'));
      onClose?.();
      queryClient.invalidateQueries([EXPRESS_DELIVERIES_GLOBAL_KEY]);
    },
  });
};
