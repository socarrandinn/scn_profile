import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IOrderStatusImport, IOrderStatusSuccessData, IOrderStatusSummary } from '../../interfaces';
import { statusOrderFileSchema } from '../../schemas/status-change.schema';
import { SubOrderService } from '../../services';
import { SUB_ORDERS_LIST_KEY } from '../../constants/sub-order.queries';

const initValues: IOrderStatusImport = {
  file: null,
};

const useSubOrderStatusImportForm = (defaultValues: IOrderStatusImport = initValues) => {
  const { t } = useTranslation('subOrder');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(statusOrderFileSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: mutateReset,
  } = useMutation((file: IOrderStatusImport) => SubOrderService.importStatus(file), {
    onSuccess: (data: Pick<IOrderStatusSuccessData, 'error'>) => {
      queryClient.invalidateQueries([SUB_ORDERS_LIST_KEY]);
      if (data?.error > 0) {
        return toast.error(t('common:errors.generalErrorMessage'));
      }

      toast.success(t('importStatusSuccess'));
    },
  });

  return {
    control,
    error: error as IOrderStatusSummary,
    isLoading,
    isSuccess,
    data,
    reset: () => {
      reset();
      mutateReset();
    },
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useSubOrderStatusImportForm;
