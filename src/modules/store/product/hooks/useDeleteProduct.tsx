import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductService } from 'modules/store/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/store/product/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteProduct = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('product');
  return useMutation(() => ProductService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
