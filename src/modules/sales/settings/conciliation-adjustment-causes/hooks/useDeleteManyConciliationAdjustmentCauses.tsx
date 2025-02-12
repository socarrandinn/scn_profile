import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { ConciliationAdjustmentCausesService } from 'modules/sales/settings/conciliation-adjustment-causes/services';
import { CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY } from 'modules/sales/settings/conciliation-adjustment-causes/constants';

export const useDeleteManyConciliationAdjustmentCauses = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('conciliationAdjustmentCauses');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return ConciliationAdjustmentCausesService.deleteMany(selected as string[]);
      return Promise.reject({ message: t('deleteMany'), reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY]);
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
