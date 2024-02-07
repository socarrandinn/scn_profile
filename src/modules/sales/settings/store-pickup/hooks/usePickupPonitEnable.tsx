import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IStorePickupSatus } from '../interfaces';
import storePickupService from '../services/store-pickup.service';
import { updateStatusStorePickup } from '../schemas/store-pickup.schema';
import { STORE_PICKUP_ONE_KEY } from '../constants';

const initValues: IStorePickupSatus = {
  enabled: false,
};

const usePickupPonitEnable = (defaultValues: IStorePickupSatus = initValues, onClose?: () => void) => {
  const { t } = useTranslation('storePickup');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(updateStatusStorePickup),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: IStorePickupSatus) => storePickupService.updateStatus(payload.enabled),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([STORE_PICKUP_ONE_KEY]);
        toast.success(t('pickupPoint.successUpdateStatus'));
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
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      //mutate(values);
      console.log(values)
    }),
  };
};
// @ts-ignore
export default usePickupPonitEnable;
