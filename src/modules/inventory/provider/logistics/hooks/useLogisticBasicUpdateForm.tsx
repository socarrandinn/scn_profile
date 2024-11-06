import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ILogistics } from '../interfaces';
import { logisticBasicSchema } from '../schemas/logistics.schema';
import logisticsService from '../services/logistics.service';
import { LOGISTICS_LIST_KEY } from '../constants';

const initValues: Partial<ILogistics> = {
  _id: '',
  name: '',
  code: '',
  handlingCost: 0,
};

const useLogisticBasicUpdateForm = (onClose: () => void, defaultValues: Partial<ILogistics> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(logisticBasicSchema),
    defaultValues,
  });

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
    values: formState.errors,
    formState,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useLogisticBasicUpdateForm;
