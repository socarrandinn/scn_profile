import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CauseCancellationService } from 'modules/sales/settings/cause-cancellation/services';
import { CAUSE_CANCELLATIONS_LIST_KEY } from 'modules/sales/settings/cause-cancellation/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteCauseCancellation = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('causeCancellation');
  return useMutation(() => CauseCancellationService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CAUSE_CANCELLATIONS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
