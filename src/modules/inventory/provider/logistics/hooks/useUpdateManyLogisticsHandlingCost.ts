import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IBulkUpdateHandlingCost } from 'modules/inventory/provider/logistics/interfaces';
import { logisticsBulkUpdateHandlingCost } from 'modules/inventory/provider/logistics/schemas/logistics.schema';
import LogisticsService from 'modules/inventory/provider/logistics/services/logistics.service';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';

const initValues: IBulkUpdateHandlingCost = {
  handlingCost: 0,
  logistics: [],
};

const useUpdateManyLogisticsHandlingCost = (
  onClose: () => void,
  defaultValues: IBulkUpdateHandlingCost = initValues,
) => {
  const { t } = useTranslation('logistics');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(logisticsBulkUpdateHandlingCost),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (values: any) => LogisticsService.updateMany(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
        toast.success(t('successHandlingCostManyUpdate'));
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
    onSubmit: handleSubmit((values) => {
      mutate({ ...values, logistics: values.logistics.map((logistic) => logistic._id) });
    }),
  };
};

export default useUpdateManyLogisticsHandlingCost;
