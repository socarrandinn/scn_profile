import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useValidatePaidOrder = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('paidOrder');
  return useMutation(() => PaidOrderService.validate(id), {
    onSuccess: (data) => {
      toast.success(t('successValidate'));
      onClose?.();
      queryClient.invalidateQueries([PAID_ORDERS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
