import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ExpressDeliveryService } from 'modules/sales/settings/express-delivery/services';
import { EXPRESS_DELIVERIES_LIST_KEY } from 'modules/sales/settings/express-delivery/constants';
import { useEffect } from 'react';
import { PROVINCES } from '@dfl/location';

const initValues: Record<string, boolean> = PROVINCES?.reduce((r, t) => {
  // @ts-ignore
  r[t.state] = false;
  return r;
}, {});

const useExpressDeliveryCreateForm = (onClose: () => void, defaultValues: Record<string, boolean> = initValues) => {
  const { t } = useTranslation('expressDelivery');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (expressDelivery: any) => ExpressDeliveryService.saveOrUpdate(expressDelivery),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([EXPRESS_DELIVERIES_LIST_KEY]);
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useExpressDeliveryCreateForm;
