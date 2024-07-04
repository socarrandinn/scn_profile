import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tabSchema } from 'modules/inventory/settings/tab/schemas/tab.schema';
import { ITab } from 'modules/inventory/settings/tab/interfaces';
import { TabService } from 'modules/inventory/settings/tab/services';
import { TABS_LIST_KEY } from 'modules/inventory/settings/tab/constants';
import { useEffect, useCallback } from 'react';

const initValues: ITab = {
  name: '',
  description: '',
};

const useTabCreateForm = (onClose: () => void, defaultValues: ITab = initValues) => {
  const { t } = useTranslation('tab');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm } = useForm({
    resolver: yupResolver(tabSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (tab: ITab) => TabService.saveOrUpdate(tab),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([TABS_LIST_KEY]);
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
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useTabCreateForm;
