import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ILogistics } from '../interfaces';
import { logisticTagsSchema } from '../schemas/logistics.schema';
import logisticsService from '../services/logistics.service';
import { LOGISTICS_LIST_KEY } from '../constants';
import { parseTagList } from 'modules/inventory/settings/tags/utils/parser-tags';

const initValues: Partial<ILogistics> = {
  _id: '',
  tags: null,
  selectedTag: [],
};

const useLogisticTagsForm = (onClose: () => void, defaultValues: Partial<ILogistics> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch, setValue } = useForm({
    resolver: yupResolver(logisticTagsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // check tags
  const tags = watch('tags');
  useEffect(() => {
    if (tags) {
      setValue('selectedTag', tags);
    }
  }, [setValue, tags]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: Partial<ILogistics>) => logisticsService.updateTags(payload),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successTagsUpdate'));
        onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const { _id, tags } = values;
      mutate({ _id, tags: parseTagList(tags || []) });
    }),
  };
};
// @ts-ignore
export default useLogisticTagsForm;
