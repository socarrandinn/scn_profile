import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect, useCallback } from 'react';
import { ISubOrderDriver } from '../interfaces';
import { subOrderDriverSchema } from '../schemas/suborder-driver.schema';
import { SubOrderService } from '../services';
import { SUB_ORDERS_ONE_KEY } from '../constants/sub-order.queries';

const initValue: ISubOrderDriver = {
  carrier: null,
  driver: null,
};

const useSubOrderDriverForm = (defaultValues: ISubOrderDriver = initValue) => {
  const { t } = useTranslation('subOrder');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(subOrderDriverSchema),
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
  } = useMutation(
    (payload: ISubOrderDriver) => {
      return SubOrderService.updateDriver(payload);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([SUB_ORDERS_ONE_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successUpdateDriver'));
        resetForm();
      },
    },
  );

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
export default useSubOrderDriverForm;
