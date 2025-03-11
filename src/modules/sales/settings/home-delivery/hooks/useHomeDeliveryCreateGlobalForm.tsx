import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import {
  HOME_DELIVERIES_GLOBAL_CENTER_KEY,
  HOME_DELIVERIES_GLOBAL_KEY,
  HOME_DELIVERIES_PLACES_KEY,
} from 'modules/sales/settings/home-delivery/constants';
import { useCallback, useEffect } from 'react';
import { deliveryGlobalSchema } from '../schemas/home-delivery.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';

const initValues: IDelivery = {
  price: 0,
  weightPrice: {
    price: 0,
    value: 0
  },
  hasExpress: false,
  expressPrice: 0,
  expressTime: {
    from: 0,
    to: 1
  },
  volumePrice: {
    price: 0,
    value: 0
  },
  time: {
    from: 0,
    to: 1
  }
};

const useHomeDeliveryCreateGlobalForm = (defaultValues: IDelivery = initValues, onClose?: () => void) => {
  const { t } = useTranslation('homeDelivery');
  const { distributionCenterId } = useDistributionCenterDetail();
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset: resetForm, setValue, watch, formState } = useForm({
    resolver: yupResolver(deliveryGlobalSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, error, isLoading, isSuccess, data, reset: resetMutation } = useMutation(
    (homeDelivery: IDelivery) => {
      return HomeDeliveryPlacesService.createGlobal(homeDelivery, distributionCenterId)
    },
    {
      onSuccess: (data, values) => {
        !distributionCenterId && queryClient.invalidateQueries([HOME_DELIVERIES_GLOBAL_KEY]);
        distributionCenterId && queryClient.invalidateQueries([HOME_DELIVERIES_GLOBAL_CENTER_KEY]);
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
    formState,
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useHomeDeliveryCreateGlobalForm;
