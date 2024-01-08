import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StoreAreaService } from 'modules/inventory/settings/store-area/services';
import { STORE_AREAS_LIST_KEY } from 'modules/inventory/settings/store-area/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteStoreArea = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('storeArea');
  return useMutation(() => StoreAreaService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([STORE_AREAS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
