import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ILogistics } from '../interfaces';
import { logisticAddressSchema } from '../schemas/logistics.schema';
import logisticsService from '../services/logistics.service';
import { LOGISTICS_LIST_KEY } from '../constants';

const initValues: Partial<ILogistics> = {
  _id: '',
  address: {
    address1: '',
    address2: '',
    houseNumber: '',
    country: 'Cuba',
    city: '',
    state: '',
    zipCode: '',
  },
};

const useLogisticAddressUpdateForm = (onClose: () => void, defaultValues: Partial<ILogistics> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch, setValue } = useForm({
    resolver: yupResolver(logisticAddressSchema),
    defaultValues,
  });

  const state = watch('address.state');

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (address: Partial<ILogistics>) => logisticsService.saveOrUpdate(address),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
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
    state,
    watch,
    setValue,
    values: formState.errors,
    formState,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useLogisticAddressUpdateForm;
