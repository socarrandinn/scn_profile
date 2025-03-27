import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { SubOrderService } from '../../services';

const useSubOrderStatusUpdate = (orderId: string) => {
  const { t } = useTranslation(['subOrder', 'errors']);
  // const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (status: string) => SubOrderService.updateStatus(orderId, status),
    {
      onSuccess: ({ data }: any) => {
        toast.success(t('subOrder:successStatusUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );

  return {
    updateStatus: mutateAsync,
    isLoading,
    value: data?.data?.visible,
  };
};

export default useSubOrderStatusUpdate;
