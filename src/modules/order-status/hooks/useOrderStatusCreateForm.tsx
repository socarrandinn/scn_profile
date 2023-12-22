import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { orderStatusSchema } from 'modules/order-status/schemas/order-status.schema';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { OrderStatusService } from 'modules/order-status/services';
import { ORDER_STATUSES_LIST_KEY } from 'modules/order-status/constants';
import { useEffect } from 'react';

const initValues: IOrderStatus = {
  title: '',
  description: '',
  order: 0,
  allowTo: [],
  tracking: false,
  notification: {
    enabled: false,
    audience: {
      target: [],
      template: '',
    },
  },
};

const useOrderStatusCreateForm = (onClose: () => void, defaultValues: IOrderStatus = initValues) => {
  const { t } = useTranslation('orderStatus');

  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(orderStatusSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  /// @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    /// @ts-ignore
    async (orderStatus: IOrderStatus) => {
      await OrderStatusService.createOrderStatus(orderStatus);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([ORDER_STATUSES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        reset();
      },
      onError: () => {
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
    setValue,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      if (!values.notification.enabled) {
        values.notification.audience.target = [];
        values.notification.audience.template = '';
      }
      mutate(values);
    }),
  };
};
export default useOrderStatusCreateForm;
