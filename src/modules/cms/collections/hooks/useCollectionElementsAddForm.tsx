import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { collectionsElementAddSchema } from 'modules/cms/collections/schemas/collections.schema';
import { ICollectionElement } from 'modules/cms/collections/interfaces';
import { CollectionElementsService } from 'modules/cms/collections/services';
import { COLLECTION_ELEMENTS_LIST_KEY, COLLECTIONS_ONE_KEY } from 'modules/cms/collections/constants';
import { useCallback } from 'react';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

const initValues: ICollectionElement = {
  elements: [],
  collectionId: '',
};

const useCollectionElementsAddForm = (
  onClose: () => void,
  defaultValues: ICollectionElement = initValues,
  contentType: COLLECTION_CONTENT_TYPE,
) => {
  const { t } = useTranslation('collection');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(collectionsElementAddSchema),
    defaultValues,
  });

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation((collections: ICollectionElement) => CollectionElementsService.add(collections), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([COLLECTIONS_ONE_KEY]);
      queryClient.invalidateQueries([COLLECTION_ELEMENTS_LIST_KEY]);

      values?.collectionId && queryClient.invalidateQueries([values.collectionId]);
      toast.success(t('collection:successElementAdd', { contentType: t(`collection:contentType.${contentType}`) }));
      onClose?.();
      resetForm();
    },
  });

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCollectionElementsAddForm;
