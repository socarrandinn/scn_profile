import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import {
  HOME_DELIVERIES_PLACES_KEY,
} from 'modules/sales/settings/home-delivery/constants';
import { useCallback, useEffect } from 'react';
import { IHomeDelivery } from '../interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { COST_TYPE } from '../../common/constants/cost-type.enum';
import { TIME_TYPE } from '../../common/constants/time-type.enum';

const initValues: IHomeDelivery = {
  price: 0,
  weightPrice: {
    price: 0,
    value: 0
  },
  costType: COST_TYPE.BASE,
  timeType: TIME_TYPE.BASE,
  volumePrice: {
    price: 0,
    value: 0
  },
  time: {
    from: 0,
    to: 0
  },
  enabled: true,
  location: {
    type: LOCATION_TYPE.COUNTRY,
    municipality: '',
    state: '',
    country: ''
  }
};

const useHomeDeliveryCreateLocation = (onClose: () => void, defaultValues: IHomeDelivery = initValues) => {
  const { t } = useTranslation('homeDelivery');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, setValue, watch } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, error, isLoading, isSuccess, data, reset: resetMutation } = useMutation(
    (homeDelivery: any) => HomeDeliveryPlacesService.saveOrUpdate({ ...homeDelivery, enabled: true }),
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
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    setValue,
    watch,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useHomeDeliveryCreateLocation;
