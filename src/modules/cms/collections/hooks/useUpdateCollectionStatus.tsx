import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COLLECTIONS_LIST_KEY } from '../constants';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionService } from '../utils/service';

const useUpdateCollectionStatus = (collectionId: string, contentType: COLLECTION_CONTENT_TYPE) => {
  const { t } = useTranslation(['collection', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: string) => CollectionService[contentType].updateStatus(collectionId, status === 'true'), {
    onSuccess: ({ data }: any) => {
      toast.success(
        t('statusUpdate.success', {
          ns: 'collection',
          status: data.active ? t('active', { ns: 'common' }) : t('inactive', { ns: 'common' }),
        }),
      );

      queryClient.invalidateQueries([COLLECTIONS_LIST_KEY]);
      queryClient.invalidateQueries(data?._id);
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });
};

export default useUpdateCollectionStatus;
