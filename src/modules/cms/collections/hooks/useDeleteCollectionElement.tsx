import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CollectionElementsService } from 'modules/cms/collections/services';
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteCollectionElement = (id: string, collectionId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('collection');
  return useMutation(
    () =>
      CollectionElementsService.remove({
        collectionId,
        elements: [id],
      }),
    {
      onSuccess: (data) => {
        toast.success(t('collection:successElementDeleted'));
        onClose?.();
        queryClient.invalidateQueries([COLLECTION_ELEMENTS_LIST_KEY]);
        queryClient.invalidateQueries([id]);
      },
    },
  );
};
