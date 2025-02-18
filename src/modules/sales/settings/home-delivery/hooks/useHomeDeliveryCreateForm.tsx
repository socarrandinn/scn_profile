import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import {
  HOME_DELIVERIES_PLACES_KEY,
} from 'modules/sales/settings/home-delivery/constants';
import { useCallback, useEffect } from 'react';
import { homeDeliveryGlobalSchema } from '../schemas/home-delivery.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IHomeDelivery } from '../interfaces';

const initValues: IHomeDelivery = {
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

const useHomeDeliveryCreateForm = (onClose?: () => void, defaultValues: IHomeDelivery = initValues) => {
  const { t } = useTranslation('homeDelivery');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset: resetForm, setValue, watch } = useForm({
    resolver: yupResolver(homeDeliveryGlobalSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, error, isLoading, isSuccess, data, reset: resetMutation } = useMutation(
    (homeDelivery: any) => HomeDeliveryPlacesService.createGlobal(homeDelivery),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([HOME_DELIVERIES_PLACES_KEY]);
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
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useHomeDeliveryCreateForm;
