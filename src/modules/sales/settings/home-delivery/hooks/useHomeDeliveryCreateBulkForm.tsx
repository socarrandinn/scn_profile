import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import {
  HOME_DELIVERIES_PLACES_KEY,
} from 'modules/sales/settings/home-delivery/constants';
import { useEffect } from 'react';
import { PROVINCES } from '@dfl/location';

const initValues: Record<string, boolean> = PROVINCES?.reduce((r, t) => {
  // @ts-ignore
  r[t.state] = false;
  return r;
}, {});

const useHomeDeliveryCreateBulkForm = (onClose: () => void, defaultValues: Record<string, boolean> = initValues) => {
  const { t } = useTranslation('homeDelivery');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (homeDelivery: any) => HomeDeliveryPlacesService.createBulk(homeDelivery),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([HOME_DELIVERIES_PLACES_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useHomeDeliveryCreateBulkForm;
