import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PAYMENT_METHOD_LIST_KEY } from '../constants';
import { PaymentMethodsService } from '../services';

export const useUpdatePaymentMethodStatus = (id: string, value: boolean, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('manufacture');
  return useMutation(() => PaymentMethodsService.updateStatus(id, value), {
    onSuccess: (data) => {
      toast.success(t('statusSuccessUpdate'));
      onClose?.();
      queryClient.invalidateQueries([PAYMENT_METHOD_LIST_KEY]);
    },
  });
};
