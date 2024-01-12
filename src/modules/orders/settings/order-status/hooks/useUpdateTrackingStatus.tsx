import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ORDER_STATUSES_LIST_KEY } from 'modules/orders/settings/order-status/constants';
import { OrderStatusService } from 'modules/orders/settings/order-status/services';

const useUpdateTrackingStatus = (orderStatusId: string) => {
  const { t } = useTranslation(['store', 'errors']);

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (tracking: boolean) => OrderStatusService.update(orderStatusId, { tracking }),
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
    updateTrackingStatus: mutate,
    isLoading,
  };
};

export default useUpdateTrackingStatus;
