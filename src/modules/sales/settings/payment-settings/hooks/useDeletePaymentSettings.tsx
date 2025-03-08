import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaymentSettingsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_SETTINGS_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeletePaymentSettings = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('paymentSettings');
  return useMutation(() => PaymentSettingsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PAYMENT_SETTINGS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
