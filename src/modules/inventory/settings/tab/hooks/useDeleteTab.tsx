import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TabService } from 'modules/inventory/settings/tab/services';
import { TABS_LIST_KEY } from 'modules/inventory/settings/tab/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteTab = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('tab');
  return useMutation(() => TabService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([TABS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
