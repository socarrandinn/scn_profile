import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { collectionsSchema } from 'modules/cms/collections/schemas/collections.schema';
import { ICollection } from 'modules/cms/collections/interfaces';
import { CollectionsService } from 'modules/cms/collections/services';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import { useEffect, useCallback } from 'react';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

export const initCollectionValues: ICollection = {
  name: '',
  description: '',
  contentType: COLLECTION_CONTENT_TYPE.BANNER,
  subType: COLLECTION_BANNER_TYPE.MULTI_BANNER,
  position: null,
  isDynamic: false,
  settings: {
    type: null,
    size: 12,
  },
};

const useCollectionsCreateForm = (onClose: () => void, defaultValues: ICollection = initCollectionValues) => {
  const { t } = useTranslation('collection');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
  } = useForm({
    resolver: yupResolver(collectionsSchema),
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
  } = useMutation((collections: ICollection) => CollectionsService.saveOrUpdate(collections), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([COLLECTIONS_LIST_KEY]);
      values?._id && queryClient.invalidateQueries([values._id]);
      toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
    setValue,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCollectionsCreateForm;
