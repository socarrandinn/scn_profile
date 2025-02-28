import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { COST_TYPE } from '../../common/constants/cost-type.enum';
import { yupResolver } from '@hookform/resolvers/yup';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { useSearchParams } from 'react-router-dom';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { homeDeliverySchema } from '../../home-delivery/schemas/home-delivery.schema';
import { ExpressDeliveryPlacesService } from '../services';
import { EXPRESS_DELIVERIES_LIST_KEY } from '../constants';

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

const useExpressDeliveryCreateLocation = (defaultValues: any = initValues, onClose?: () => void) => {
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
    (expressDelivery: any) => {
      const data = {
        ...expressDelivery,
        location: {
          ...expressDelivery.location,
          type,
          state: state || expressDelivery?.location?.state?.code || expressDelivery?.location?.state,
          country: MS_LOCATION_CONFIG.isCuban ? 'Cuba' : country || expressDelivery.location?.country,
          city: expressDelivery?.location?.city?.code || expressDelivery?.location?.city
        },
        customPrice: expressDelivery?.customPrice !== COST_TYPE.BASE
      }
      return ExpressDeliveryPlacesService.saveOrUpdateCustom(data)
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([EXPRESS_DELIVERIES_LIST_KEY]);
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
export default useExpressDeliveryCreateLocation;
