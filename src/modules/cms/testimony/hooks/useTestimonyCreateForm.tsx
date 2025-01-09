import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { testimonySchema } from 'modules/cms/testimony/schemas/testimony.schema';
import { ITestimony } from 'modules/cms/testimony/interfaces';
import { TestimonyService } from 'modules/cms/testimony/services';
import { TESTIMONIES_LIST_KEY } from 'modules/cms/testimony/constants';
import { useEffect, useCallback } from 'react';

const initValues: ITestimony = {
  title: '',
  personName: '',
  comment: '',
  image: {
    thumb: '',
    url: ''
  }
};

const useTestimonyCreateForm = (onClose: () => void, defaultValues: ITestimony = initValues) => {
  const { t } = useTranslation('testimony');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, formState } = useForm({
    resolver: yupResolver(testimonySchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (testimony: ITestimony) => TestimonyService.saveOrUpdate(testimony),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([TESTIMONIES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values?._id]);
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
    formState,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useTestimonyCreateForm;
