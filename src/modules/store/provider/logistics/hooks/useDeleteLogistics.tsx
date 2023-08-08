import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogisticsService } from 'modules/store/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/store/provider/logistics/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteLogistics = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('logistics');
  return useMutation(() => LogisticsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
