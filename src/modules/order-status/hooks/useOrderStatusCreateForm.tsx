import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { orderStatusSchema } from 'modules/order-status/schemas/order-status.schema';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { OrderStatusService } from 'modules/order-status/services';
import { ORDER_STATUSES_LIST_KEY, initValues } from 'modules/order-status/constants';
import { useCallback, useEffect, useState } from 'react';

const useOrderStatusCreateForm = (onClose: () => void, defaultValues: IOrderStatus = initValues) => {
  const { t } = useTranslation('orderStatus');

  const [submitButtonActionName, setSubmitButtonActionName] = useState('');

  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(orderStatusSchema),
    defaultValues,
  });

  // If default values was provided, initialize the form values with this values
  useEffect(() => {
    // @ts-ignore
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  /// @ts-ignore
  const { mutate, error, isLoading, isSuccess, data, ...rest } = useMutation(
    async (orderStatus: IOrderStatus) => {
      await OrderStatusService.saveOrUpdate(orderStatus);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([ORDER_STATUSES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        reset(initValues);
        submitButtonActionName === 'save' && onClose();
      },
      onError: () => {
        reset(initValues);
      },
    },
  );

  const resetMutationState = useCallback(() => {
    rest.reset();
  }, []);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    submitButtonActionName,
    resetMutationState,
    setValue,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit(async (values, e) => {
      const submitEvent = e?.nativeEvent as SubmitEvent;
      if (!values.notification.enabled) {
        values.notification.audience.target = [];
        values.notification.audience.template = '';
      }
      mutate(values);
      /// @ts-ignore
      setSubmitButtonActionName(submitEvent?.submitter?.name);
    }),
  };
};
export default useOrderStatusCreateForm;
