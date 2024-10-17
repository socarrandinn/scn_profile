import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import { IValidation } from '../interfaces/IValidation';

export const useOrderValidateShipping = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('order');

  return useMutation((values: IValidation) => PaidOrderService.validateShipping(id, values), {
    onSuccess: () => {
      toast.success(t('successUpdate'));
      queryClient.invalidateQueries([PAID_ORDERS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
