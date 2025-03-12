import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { updateDispatchSchema } from '../schemas/dispatch.schema';
import { DispatchService } from '../services';
import { DISPATCHES_LIST_KEY } from '../constants';
import { SUB_ORDERS_LIST_KEY } from 'modules/sales/sub-orders/constants/sub-order.queries';
import { DISPATCH_ROUTE } from '../constants/dispatch-route';

type IUpdateDispatch = {
  dispatch: string | null;
  filters: any;
};
const initValues: IUpdateDispatch = {
  dispatch: null,
  filters: {},
};

const useDispatchUpdateForm = (onClose: () => void, defaultValues: IUpdateDispatch = initValues) => {
  const { t } = useTranslation('dispatch');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(updateDispatchSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (values: IUpdateDispatch) =>
      DispatchService.add(values?.dispatch, {
        filters: values?.filters,
      }),
    {
      onSuccess: (data, values) => {
        const dispatch = values?.dispatch;
        queryClient.invalidateQueries([DISPATCHES_LIST_KEY]);
        queryClient.invalidateQueries([SUB_ORDERS_LIST_KEY]);
        dispatch && queryClient.invalidateQueries([dispatch]);
        toast.success(t(dispatch ? 'successUpdate' : 'successCreated'));
        onClose?.();
        reset();
        navigate(DISPATCH_ROUTE.DETAIL(dispatch as string));
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
    resetMutation,
    setValue,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useDispatchUpdateForm;
