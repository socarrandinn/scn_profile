import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COLLECTIONS_LIST_KEY } from '../constants';
import { COLLECTION_CONTENT_TYPE, COLLECTION_POSITION } from '../constants/collection-types';
import { CollectionService } from '../utils/service';

const useUpdateCollectionPositionStatus = (collectionId: string, contentType: COLLECTION_CONTENT_TYPE) => {
  const { t } = useTranslation(['collection', 'errors']);
  const queryClient = useQueryClient();

  return useMutation(
    (position: COLLECTION_POSITION) => CollectionService[contentType].updatePosition(collectionId, position),
    {
      onSuccess: ({ data }: any) => {
        toast.success(
          t('positionUpdate.success', {
            ns: 'collection',
            type: t(`position.${contentType}.${data?.position as string}`, { ns: 'collection' }),
          }),
        );

        queryClient.invalidateQueries([COLLECTIONS_LIST_KEY]);
        queryClient.invalidateQueries(data?._id);
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );
};

export default useUpdateCollectionPositionStatus;
