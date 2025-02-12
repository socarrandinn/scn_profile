import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { collectionsElementAddSchema } from 'modules/cms/collections/schemas/collections.schema';
import { ICollectionElementRequest } from 'modules/cms/collections/interfaces';
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';
import { useCallback } from 'react';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionElementService } from '../utils/service';

const initValues: ICollectionElementRequest = {
  elements: [],
  collectionId: '',
};

const useCollectionElementsAddForm = (
  defaultValues: ICollectionElementRequest = initValues,
  contentType: COLLECTION_CONTENT_TYPE,
  onClose?: () => void,
) => {
  const { t } = useTranslation('collection');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
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
  } = useMutation(
    (collections: ICollectionElementRequest) => {
      return CollectionElementService[contentType].add(collections);
    },
    {
      onSuccess: (data, values) => {
        if (data) {
          queryClient.invalidateQueries([COLLECTION_ELEMENTS_LIST_KEY]);
        }

        values?.collectionId && queryClient.invalidateQueries([values.collectionId]);
        toast.success(t('collection:successElementAdd', { contentType: t(`collection:contentType.${contentType}`) }));
        onClose?.();
        resetForm();
      },
    },
  );

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
    setValue,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCollectionElementsAddForm;
