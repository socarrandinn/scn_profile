import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { stockReductionCauseSchema } from 'modules/inventory/settings/stock-reduction-cause/schemas/stock-reduction-cause.schema';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import { StockReductionCauseService } from 'modules/inventory/settings/stock-reduction-cause/services';
import { STOCK_REDUCTION_CAUSES_LIST_KEY } from 'modules/inventory/settings/stock-reduction-cause/constants';
import { useEffect, useCallback } from 'react';

const initValues: IStockReductionCause = {
  name: '',
  description: '',
  requiresResponsible: false,
  requiresEvidence: false,
};

const useStockReductionCauseCreateForm = (onClose: () => void, defaultValues: IStockReductionCause = initValues) => {
  const { t } = useTranslation('stockReductionCause');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(stockReductionCauseSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation(
    (stockReductionCause: IStockReductionCause) => StockReductionCauseService.saveOrUpdate(stockReductionCause),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([STOCK_REDUCTION_CAUSES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useStockReductionCauseCreateForm;
