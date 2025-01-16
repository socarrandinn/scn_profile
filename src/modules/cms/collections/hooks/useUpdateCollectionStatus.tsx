import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CollectionsService } from '../services';
import { COLLECTIONS_LIST_KEY } from '../constants';

const useUpdateCollectionStatus = (collectionId: string) => {
  const { t } = useTranslation(['collection', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((status: string) => CollectionsService.updateStatus(collectionId, status === 'true'), {
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
