import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { pageSchema } from 'modules/cms/page/schemas/page.schema';
import { IPage } from 'modules/cms/page/interfaces';
import { PageService } from 'modules/cms/page/services';
import { PAGES_LIST_KEY } from 'modules/cms/page/constants';
import { useEffect, useCallback } from 'react';

const initValues: IPage = {
  slug: '',
  seo: {
    name: '',
    description: '',
  },
  content: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const usePageCreateForm = (onClose: () => void, defaultValues: IPage = initValues) => {
  const { t } = useTranslation('page');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, watch } = useForm({
    resolver: yupResolver(pageSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (page: IPage) => PageService.saveOrUpdate(page),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PAGES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(
    () => {
      resetForm()
      resetMutation()
    },
    [resetForm, resetMutation],
  )

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    watch,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePageCreateForm;
