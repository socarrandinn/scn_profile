import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductDiscountService } from 'modules/sales-offer/product-discount/services';
import { PRODUCT_DISCOUNTS_LIST_KEY } from 'modules/sales-offer/product-discount/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteProductDiscount = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('productDiscount');
  return useMutation(() => ProductDiscountService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCT_DISCOUNTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
