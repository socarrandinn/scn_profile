import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { EXPRESS_DELIVERIES_GLOBAL_KEY } from '../constants';
import { ExpressDeliveryService } from '../services';
import { IDelivery } from '../../home-delivery/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { deliveryGlobalSchema } from '../../home-delivery/schemas/home-delivery.schema';

const initValues: IDelivery = {
  price: 0,
  weightPrice: {
    price: 0,
    value: 0
  },
  volumePrice: {
    price: 0,
    value: 0
  },
  time: {
    from: 0,
    to: 0
  }
};

const useExpressDeliveryCreateGlobalForm = (defaultValues: IDelivery = initValues, onClose?: () => void) => {
  const { t } = useTranslation('homeDelivery');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset: resetForm, setValue, watch, formState } = useForm({
    resolver: yupResolver(deliveryGlobalSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, error, isLoading, isSuccess, data, reset: resetMutation } = useMutation(
    (homeDelivery: any) => ExpressDeliveryService.createGlobal(homeDelivery),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([EXPRESS_DELIVERIES_GLOBAL_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(() => {
    resetForm()
    resetMutation()
  }, [resetForm, resetMutation])

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    watch,
    formState,
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useExpressDeliveryCreateGlobalForm;
