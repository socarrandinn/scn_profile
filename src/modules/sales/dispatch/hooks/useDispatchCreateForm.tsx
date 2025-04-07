import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { DispatchDTO } from 'modules/sales/dispatch/interfaces';
import { DispatchService } from 'modules/sales/dispatch/services';
import { DISPATCHES_LIST_KEY } from 'modules/sales/dispatch/constants';
import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { DISPATCH_ROUTE } from '../constants/dispatch-route';
import { dispatchCreateSchema } from '../schemas/dispatch.schema';

const initValues: Partial<DispatchDTO> = {
  name: '',
  filters: {},

  logistic: null,
  space: null,
};

const useDispatchCreateForm = (
  onClose: () => void,
  defaultValues: Partial<DispatchDTO> = initValues,
  schema = dispatchCreateSchema,
) => {
  const { t } = useTranslation('dispatch');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const space = watch('space');

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation((dispatch: Partial<DispatchDTO>) => DispatchService.saveOrUpdate(dispatch), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([DISPATCHES_LIST_KEY]);
      values?._id && queryClient.invalidateQueries([values._id]);
      toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
      onClose?.();
      resetForm();
      navigate(DISPATCH_ROUTE.DETAIL(data?._id as string));
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
    space,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useDispatchCreateForm;
