import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CollectionsService } from '../services';
import { COLLECTIONS_LIST_KEY } from '../constants';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from '../constants/collection-types';

const useUpdateCollectionDynamicType = (collectionId: string, contentType: COLLECTION_CONTENT_TYPE) => {
  const { t } = useTranslation(['collection', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((type: DYNAMIC_COLLECTION_TYPE) => CollectionsService.updateDynamicType(collectionId, type), {
    onSuccess: ({ data }: any) => {
      toast.success(
        t('dynamicTypeUpdate.success', {
          ns: 'collection',
          type: t(`dynamic.${contentType}.${data?.dynamic as string}`, { ns: 'collection' }),
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

export default useUpdateCollectionDynamicType;
