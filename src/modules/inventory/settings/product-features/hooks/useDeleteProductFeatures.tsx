import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ProductFeatureService } from '../services';
import { PRODUCT_FEATURE_LIST_KEY } from '../constants/product-feature.queries';

export const useDeleteProductFeatures = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('productFeatures');
  return useMutation(() => ProductFeatureService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCT_FEATURE_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
