import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StoreService } from 'modules/inventory/store/services';
import { STORES_LIST_KEY } from 'modules/inventory/store/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteStore = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('store');
  return useMutation(() => StoreService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([STORES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
