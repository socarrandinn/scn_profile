import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DispatchService } from 'modules/sales/dispatch/services';
import { DISPATCHES_LIST_KEY } from 'modules/sales/dispatch/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteDispatch = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('dispatch');
  return useMutation(() => DispatchService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([DISPATCHES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
