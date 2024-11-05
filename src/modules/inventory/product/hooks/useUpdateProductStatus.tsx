import ProductService from '../services/product.service';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const useUpdateProductStatus = (productId: string) => {
  const { t } = useTranslation(['product', 'errors']);
  // const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (status: string) => ProductService.updateStatus(productId, status === 'true'),
    {
      onSuccess: ({ data }: any) => {
        toast.success(
          t('statusUpdate.success', {
            ns: 'product',
            status: data.visible
              ? t('statusProduct.active', { ns: 'product' })
              : t('statusProduct.inactive', { ns: 'product' }),
          }),
        );
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

export default useUpdateProductStatus;
