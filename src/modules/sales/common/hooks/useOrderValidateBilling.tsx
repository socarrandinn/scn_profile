import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IValidation } from '../interfaces/IValidation';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';

export const useOrderValidateBilling = (id: string | undefined, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('order');

  return useMutation((values: IValidation) => PaidOrderService.validateBilling(id, values), {
    onSuccess: () => {
      toast.success(t('successUpdate'));
      onClose?.();
      queryClient.invalidateQueries([PAID_ORDERS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
