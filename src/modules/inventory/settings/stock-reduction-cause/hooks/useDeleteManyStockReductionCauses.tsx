import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { StockReductionCauseService } from 'modules/inventory/settings/stock-reduction-cause/services';
import { STOCK_REDUCTION_CAUSES_LIST_KEY } from 'modules/inventory/settings/stock-reduction-cause/constants';

export const useDeleteManyStockReductionCauses = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('stockReductionCause');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return StockReductionCauseService.deleteMany(selected as string[]);
      return Promise.reject({ message: t('deleteMany'), reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([STOCK_REDUCTION_CAUSES_LIST_KEY]);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') toast.error(t('common:errors.needSelection'));
        else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );
};
