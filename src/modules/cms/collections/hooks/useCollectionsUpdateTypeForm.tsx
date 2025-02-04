import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { collectionsSettingsTypeSchema } from 'modules/cms/collections/schemas/collections.schema';
import { ICollection } from 'modules/cms/collections/interfaces';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import { useEffect, useCallback } from 'react';
import { COLLECTION_CONTENT_TYPE, DYNAMIC_COLLECTION_TYPE } from '../constants/collection-types';
import { CollectionService } from '../utils/service';

type CollectionProps = Pick<ICollection, '_id' | 'settings' | 'contentType'>;

export const initCollectionValues: CollectionProps = {
  settings: {
    type: DYNAMIC_COLLECTION_TYPE.CUSTOM,
    size: 12,
  },
  contentType: COLLECTION_CONTENT_TYPE.PRODUCT,
};

const useCollectionsUpdateTypeForm = (onClose: () => void, defaultValues: CollectionProps = initCollectionValues) => {
  const { t } = useTranslation('collection');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
  } = useForm({
    resolver: yupResolver(collectionsSettingsTypeSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation(
    (collections: CollectionProps) =>
      CollectionService[collections.contentType as COLLECTION_CONTENT_TYPE].saveOrUpdate(collections),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([COLLECTIONS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successTypeUpdate'));
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
export default useCollectionsUpdateTypeForm;
