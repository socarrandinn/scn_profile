import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StockReductionCauseService } from 'modules/inventory/settings/stock-reduction-cause/services';
import { STOCK_REDUCTION_CAUSES_LIST_KEY } from 'modules/inventory/settings/stock-reduction-cause/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteStockReductionCause = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('stockReductionCause');
  return useMutation(() => StockReductionCauseService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([STOCK_REDUCTION_CAUSES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
