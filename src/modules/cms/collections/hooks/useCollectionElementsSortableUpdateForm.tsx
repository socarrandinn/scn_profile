import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ICollectionElement } from 'modules/cms/collections/interfaces';
import { COLLECTION_ELEMENTS_LIST_KEY, COLLECTIONS_ONE_KEY } from 'modules/cms/collections/constants';
import { useCallback } from 'react';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionElementService } from '../utils/service';

const useCollectionElementsSortableUpdateForm = (contentType: COLLECTION_CONTENT_TYPE) => {
  const { t } = useTranslation('collection');
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation((collections: ICollectionElement) => CollectionElementService[contentType].add(collections), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([COLLECTIONS_ONE_KEY]);
      queryClient.invalidateQueries([COLLECTION_ELEMENTS_LIST_KEY]);

      values?.collectionId && queryClient.invalidateQueries([values.collectionId]);
      toast.success(t('collection:successElementAdd', { contentType: t(`collection:contentType.${contentType}`) }));
    },
  });

  const reset = useCallback(() => {
    resetMutation();
  }, [resetMutation]);

  return {
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    mutateAsync,
  };
};
export default useCollectionElementsSortableUpdateForm;
