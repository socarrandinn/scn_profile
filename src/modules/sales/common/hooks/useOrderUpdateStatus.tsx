import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const useUpdateOrderStatus = (orderId: string) => {
  const { t } = useTranslation('paidOrders');
  const queryClient = useQueryClient();

  return useMutation((status: string) => PaidOrderService.updateStatus(orderId, status), {
    onSuccess: ({ data }: any) => {
      toast.success(t('statusUpdate.success'));
      queryClient.invalidateQueries([PAID_ORDERS_LIST_KEY]);
      queryClient.invalidateQueries(data._id);
      if (data.parentOrder) queryClient.invalidateQueries(data.parentOrder);
    },
    onError: () => {
      toast.error(t('statusUpdate.error'));
    },
  });
};

export default useUpdateOrderStatus;
