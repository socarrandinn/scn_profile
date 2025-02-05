import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CollectionElementService } from '../utils/service';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

export const useDeleteCollectionElement = (
  id: string,
  collectionId: string,
  contentType: COLLECTION_CONTENT_TYPE,
  onClose: () => void,
) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('collection');
  return useMutation(
    () =>
      CollectionElementService[contentType].remove({
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
