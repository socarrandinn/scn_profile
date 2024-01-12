import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OrderStatusService } from 'modules/sales/settings/order-status/services';
import { ORDER_STATUSES_LIST_KEY } from 'modules/sales/settings/order-status/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteOrderStatus = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('orderStatus');
  return useMutation(() => OrderStatusService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([ORDER_STATUSES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
