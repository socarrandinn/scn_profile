import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COLLECTIONS_LIST_KEY } from '../constants';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from '../constants/collection-types';
import { CollectionService } from '../utils/service';

const useUpdateCollectionDynamicTypeStatus = (collectionId: string, contentType: COLLECTION_CONTENT_TYPE) => {
  const { t } = useTranslation(['collection', 'errors']);
  const queryClient = useQueryClient();

  return useMutation(
    (dynamic: DYNAMIC_COLLECTION_TYPE) => CollectionService[contentType].updateDynamicType(collectionId, dynamic),
    {
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
    },
  );
};

export default useUpdateCollectionDynamicTypeStatus;
