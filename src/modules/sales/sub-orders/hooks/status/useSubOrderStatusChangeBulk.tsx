import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { SUB_ORDERS_LIST_KEY } from 'modules/sales/sub-orders/constants/sub-order.queries';
import { statusChangeBulkSchema } from '../../schemas/status-change.schema';
import { IStatusChange } from '../../interfaces';
import { SubOrderService } from '../../services';

const initValues: IStatusChange = {
  status: null,
  filters: {},
};

const useSubOrderStatusChangeBulk = (onClose: () => void, defaultValues: IStatusChange = initValues) => {
  const { t } = useTranslation('subOrder');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(statusChangeBulkSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation((values: IStatusChange) => SubOrderService.updateStatusBulk(values), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([SUB_ORDERS_LIST_KEY]);
      toast.success(t('successStatusBulkUpdate'));
      onClose?.();
      reset();
    },
  });

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset: () => {
      reset();
      resetMutation();
    },
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useSubOrderStatusChangeBulk;
