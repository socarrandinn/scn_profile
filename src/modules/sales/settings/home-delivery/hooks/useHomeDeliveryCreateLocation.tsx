import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import {
  HOME_DELIVERIES_PLACES_KEY,
} from 'modules/sales/settings/home-delivery/constants';
import { useCallback, useEffect } from 'react';
import { IDelivery } from '../interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { COST_TYPE } from '../../common/constants/cost-type.enum';
import { yupResolver } from '@hookform/resolvers/yup';
import { homeDeliverySchema } from '../schemas/home-delivery.schema';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { useSearchParams } from 'react-router-dom';

const initValues: IDelivery = {
  price: 0,
  weightPrice: {
    price: 0,
    value: 0
  },
  global: false,
  customPrice: COST_TYPE.BASE,
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
    city: undefined,
    state: null,
    country: MS_LOCATION_CONFIG.isCuban ? 'Cuba' : null,
  }
};

const useHomeDeliveryCreateLocation = (defaultValues: any = initValues, onClose?: () => void) => {
  const { t } = useTranslation('homeDelivery');
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const state = searchParams.get('state');
  const country = searchParams.get('country');

  const { control, handleSubmit, reset: resetForm, setValue, watch, formState } = useForm({
    resolver: yupResolver(homeDeliverySchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, error, isLoading, isSuccess, data, reset: resetMutation } = useMutation(
    (homeDelivery: any) => {
      const data = {
        ...homeDelivery,
        location: {
          ...homeDelivery.location,
          type,
          state: state || homeDelivery?.location?.state?.code || homeDelivery?.location?.state,
          country: MS_LOCATION_CONFIG.isCuban ? 'Cuba' : country || homeDelivery.location?.country,
          city: homeDelivery?.location?.city?.code || homeDelivery?.location?.city
        },
        customPrice: homeDelivery?.customPrice !== COST_TYPE.BASE
      }
      return HomeDeliveryPlacesService.saveOrUpdateCustom(data)
    },
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
    formState,
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
