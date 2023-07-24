import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductsService } from 'modules/provider/products/services';
import { PRODUCTS_LIST_KEY } from 'modules/provider/products/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteProducts = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('products');
  return useMutation(() => ProductsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
