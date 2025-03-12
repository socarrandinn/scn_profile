import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { dispatchSchema } from 'modules/sales/dispatch/schemas/dispatch.schema';
import { IDispatch } from 'modules/sales/dispatch/interfaces';
import { DispatchService } from 'modules/sales/dispatch/services';
import { DISPATCHES_LIST_KEY } from 'modules/sales/dispatch/constants';
import { useEffect, useCallback } from 'react';

type DispatchType = Pick<IDispatch, 'name' | '_id'>;
const initValues: Pick<IDispatch, 'name'> = {
  name: '',
};

const useDispatchCreateForm = (onClose: () => void, defaultValues: DispatchType = initValues) => {
  const { t } = useTranslation('dispatch');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(dispatchSchema),
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
  } = useMutation((dispatch: DispatchType) => DispatchService.saveOrUpdate(dispatch), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([DISPATCHES_LIST_KEY]);
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
    onSubmit: handleSubmit((values) => {
      mutate(partialDispatch(values));
    }),
  };
};
export default useDispatchCreateForm;

const partialDispatch = (dispatch: DispatchType): DispatchType => {
  return {
    _id: dispatch?._id,
    name: dispatch?.name,
  };
};
