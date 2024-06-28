import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { ProductDiscountService } from '../services';

export const useDeleteProductDiscountProduct = (productDiscountId: string, productId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('productDiscount');
  return useMutation(() => ProductDiscountService.removeProduct(productDiscountId, [productId]), {
    onSuccess: (data: any) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCT_DISCOUNTS_LIST_KEY]);
      queryClient.invalidateQueries([data._id]);
    },
  });
};
