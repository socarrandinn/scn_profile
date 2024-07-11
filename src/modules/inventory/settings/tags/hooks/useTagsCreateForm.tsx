import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tagsSchema } from 'modules/inventory/settings/tags/schemas/tags.schema';
import { ITags, TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';
import { useEffect, useCallback } from 'react';

const initValues: ITags = {
  name: '',
  isRequiredForProducts: false,
  isRequiredForProviders: [],
  type: TAG_TYPE_ENUM.STRING,
  values: [],
};

const useTagsCreateForm = (onClose: () => void, defaultValues: ITags = initValues) => {
  const { t } = useTranslation('tags');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
  } = useForm({
    resolver: yupResolver(tagsSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const tagType = watch('type');

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,

    data,
  } = useMutation((tags: ITags) => TagsService.saveOrUpdate(tags), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([TAGS_LIST_KEY]);
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
    tagType,
    isLoading,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      const { type, values: array, ...rest } = values;
      mutate({
        ...rest,
        type,
        values: type === TAG_TYPE_ENUM.ARRAY ? array : [],
      });
    }),
  };
};
export default useTagsCreateForm;
