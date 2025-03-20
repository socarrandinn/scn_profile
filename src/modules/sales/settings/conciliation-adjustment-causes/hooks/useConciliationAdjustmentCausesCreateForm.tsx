import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { conciliationAdjustmentCausesSchema } from 'modules/sales/settings/conciliation-adjustment-causes/schemas/conciliation-adjustment-causes.schema';
import { IConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/interfaces';
import { ConciliationAdjustmentCausesService } from 'modules/sales/settings/conciliation-adjustment-causes/services';
import { CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY } from 'modules/sales/settings/conciliation-adjustment-causes/constants';
import { useEffect, useCallback } from 'react';

const initValues: IConciliationAdjustmentCauses = {
  name: '',
  description: '',
};

const useConciliationAdjustmentCausesCreateForm = (
  onClose: () => void,
  defaultValues: IConciliationAdjustmentCauses = initValues,
) => {
  const { t } = useTranslation('conciliationAdjustmentCauses');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(conciliationAdjustmentCausesSchema),
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
    (conciliationAdjustmentCauses: IConciliationAdjustmentCauses) =>
      ConciliationAdjustmentCausesService.saveOrUpdate(conciliationAdjustmentCauses),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY]);
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
export default useConciliationAdjustmentCausesCreateForm;
