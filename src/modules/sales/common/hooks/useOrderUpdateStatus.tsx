import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const useUpdateOrderStatus = (orderId: string, code: string | undefined) => {
  const { t } = useTranslation('paidOrders');
  const queryClient = useQueryClient();

  return useMutation((statusId: string | undefined) => PaidOrderService.updateStatus(orderId, code, statusId), {
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
