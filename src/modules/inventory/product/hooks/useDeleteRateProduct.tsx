import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import productRateService from '../services/product-rate.service';
import { PRODUCTS_RATE_LIST } from '../constants/query-keys';

export const useDeleteRateProduct = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('rate');

  return useMutation(() => productRateService.deleteRate(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCTS_RATE_LIST]);
      queryClient.invalidateQueries([id]);
    },
  });
};
