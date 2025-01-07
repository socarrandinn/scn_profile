import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CollectionsService } from 'modules/cms/collections/services';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteCollections = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('collections');
  return useMutation(() => CollectionsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([COLLECTIONS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
