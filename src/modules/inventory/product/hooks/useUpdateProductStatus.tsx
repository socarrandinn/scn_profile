import ProductService from '../services/product.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCTS_LIST_KEY } from '../constants';

const useUpdateProductStatus = (productId: string) => {
  const { t } = useTranslation(['product', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: string) => ProductService.updateStatus(productId, status === 'true'), {
    onSuccess: ({ data }: any) => {
      toast.success(
        t('statusUpdate.success', {
          ns: 'product',
          status: data.visible
            ? t('statusProduct.active', { ns: 'product' })
            : t('statusProduct.inactive', { ns: 'product' }),
        }),
      );
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
      queryClient.invalidateQueries(data._id);
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });
};

export default useUpdateProductStatus;
