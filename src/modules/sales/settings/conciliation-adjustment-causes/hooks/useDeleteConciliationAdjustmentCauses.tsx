import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ConciliationAdjustmentCausesService } from 'modules/sales/settings/conciliation-adjustment-causes/services';
import { CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY } from 'modules/sales/settings/conciliation-adjustment-causes/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteConciliationAdjustmentCauses = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('conciliationAdjustmentCauses');
  return useMutation(() => ConciliationAdjustmentCausesService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
