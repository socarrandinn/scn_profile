import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CurrencySettingsService } from 'modules/sales/settings/payment-settings/services';
import { CURRENCY_SETTINGS_KEY } from 'modules/sales/settings/payment-settings/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeletePaymentSettings = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('paymentSettings');
  return useMutation(() => CurrencySettingsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CURRENCY_SETTINGS_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
