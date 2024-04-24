import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IPlace } from '../interfaces';
import { pickUpPointSchema } from '../schemas/store-pickup.schema';
import { StorePickupPlaceService } from '../services';
import { STORE_PICKUP_ONE_KEY } from '../constants';

const initValues: Partial<IPlace> = {
  name: '',
  time: 0,
  location: {
    street: '',
    number: '',
    country: 'Cuba',
    city: '',
    state: '',
  },
};

const usePickUpPointCreateForm = (
  onClose: () => void,
  defaultValues: Partial<IPlace> = initValues,
  mode: 'create' | 'edit' = 'create',
) => {
  const { t } = useTranslation('storePickup');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(pickUpPointSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (shippingPlaceSettings: { places: IPlace[] }) => StorePickupPlaceService.saveOrUpdate(shippingPlaceSettings),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([STORE_PICKUP_ONE_KEY]);
        toast.success(t(`pickupPoint.${mode === 'create' ? 'successPlaceCreated' : 'successPlaceUpdated'}`));
        onClose?.();
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
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values: any) => {
      mutate(values);
    }),
    watch,
  };
};
export default usePickUpPointCreateForm;
