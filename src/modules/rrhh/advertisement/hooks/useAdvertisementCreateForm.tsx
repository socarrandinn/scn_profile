import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { advertisementSchema } from 'modules/rrhh/advertisement/schemas/advertisement.schema';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';
import { AdvertisementService } from 'modules/rrhh/advertisement/services';
import { ADVERTISEMENTS_LIST_KEY } from 'modules/rrhh/advertisement/constants';
import { useEffect } from 'react';

const initValues: IAdvertisement = {
  name: '',
  description: '',
};

const useAdvertisementCreateForm = (onClose: () => void, defaultValues: IAdvertisement = initValues) => {
  const { t } = useTranslation('advertisement');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(advertisementSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (advertisement: IAdvertisement) => AdvertisementService.saveOrUpdate(advertisement),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([ADVERTISEMENTS_LIST_KEY]);
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
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useAdvertisementCreateForm;
