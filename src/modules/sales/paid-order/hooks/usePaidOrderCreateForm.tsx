import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { paidOrderSchema } from 'modules/sales/paid-order/schemas/paid-order.schema';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import { useEffect, useCallback } from 'react';

const initValues: Partial<IPaidOrder> = {
  code: '',
};

const usePaidOrderCreateForm = (onClose: () => void, defaultValues: Partial<IPaidOrder> = initValues) => {
  const { t } = useTranslation('paidOrder');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(paidOrderSchema),
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
  } = useMutation((paidOrder: Partial<IPaidOrder>) => PaidOrderService.saveOrUpdate(paidOrder), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([PAID_ORDERS_LIST_KEY]);
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
      mutate(values);
    }),
  };
};
export default usePaidOrderCreateForm;
