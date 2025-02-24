import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { IReconciliationAdjustment } from '../interfaces/IReconciliationAdjustment';
import { reconciliationAdjustmentSchema } from '../schemas/reconciliation-adjustment.schema';
import { ReconciliationAdjustmentService } from '../services';
import { RECONCILIATION_ADJUSTMENT_LIST_KEY } from '../constants/reconciliation-adjustment.query-keys';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

const initValues: IReconciliationAdjustment = {
  causeAdjustment: null,
  totalAmount: 0,
  providerType: PROVIDER_TYPE_ENUM.LOGISTIC,
  provider: null,
  description: '',
  //  conciliation: '67bb737af12681b467eebea6', // todo
};

const useReconciliationAdjustmentCreateForm = (onClose: () => void, defaultValues: any = initValues) => {
  const { t } = useTranslation('reconciliationAdjustment');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(reconciliationAdjustmentSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: IReconciliationAdjustment) => ReconciliationAdjustmentService.saveOrUpdate(payload),
    {
      onSuccess: ({ data }: any) => {
        queryClient.invalidateQueries([RECONCILIATION_ADJUSTMENT_LIST_KEY]);
        toast.success(t(data?._id ? 'successUpdated' : 'successCreated'));
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
    watch,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useReconciliationAdjustmentCreateForm;
