import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { RECONCILIATION_ADJUSTMENT_LIST_KEY } from '../constants/reconciliation-adjustment.query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReconciliationAdjustmentService } from '../services';

export const useReconciliationAdjustmentDelete = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reconciliationAdjustment');
  return useMutation(() => ReconciliationAdjustmentService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([RECONCILIATION_ADJUSTMENT_LIST_KEY]).then();
    },
  });
};
