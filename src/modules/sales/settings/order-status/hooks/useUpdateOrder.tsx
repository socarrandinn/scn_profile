import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ORDER_STATUSES_LIST_KEY } from 'modules/sales/settings/order-status/constants';
import { OrderStatusService } from 'modules/sales/settings/order-status/services';

const useUpdateOrder = (orderStatusId: string) => {
  const { t } = useTranslation(['store', 'errors']);

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (newOrder: number) => OrderStatusService.update(orderStatusId, { order: newOrder }),
    {
      onSuccess: ({ data }: any) => {
        queryClient.invalidateQueries([ORDER_STATUSES_LIST_KEY]);
        toast.success(t('successUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );

  return {
    updateOrder: mutate,
    updateIsLoading: isLoading,
  };
};

export default useUpdateOrder;
