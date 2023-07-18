import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { logisticsSchema } from 'modules/provider/logistics/schemas/logistics.schema';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import { LogisticsService } from 'modules/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/provider/logistics/constants';
import { useEffect } from 'react';
import { addressWithLocationInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';

const initValues: ILogistics = {
  name: '',
  code: '',
  active: true,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  commission: 0.0,
  categories: [],
  handlingCost: 0.0,
  address: addressWithLocationInitValue,
};

const useLogisticsCreateForm = (onClose: () => void, defaultValues: ILogistics = initValues) => {
  const { t } = useTranslation('logistics');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, getValues, watch } = useForm({
    resolver: yupResolver(logisticsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (logistics: ILogistics) => LogisticsService.saveOrUpdate(logistics),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
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
    getValues,
    watch,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useLogisticsCreateForm;
