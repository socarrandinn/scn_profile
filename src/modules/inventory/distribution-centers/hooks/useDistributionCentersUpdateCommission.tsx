import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { handlingCostSchema } from 'modules/inventory/distribution-centers/schemas/distribution-centers.schema';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_ONE_KEY } from 'modules/inventory/distribution-centers/constants';
import { useEffect, useCallback } from 'react';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';

const initValue = {
  _id: '',
  handlingCos: {
    type: PRICE_TYPE.FIXED,
    value: 0,
  }
}
const useDistributionCentersUpdateCommission = (onClose: () => void, defaultValues: Partial<IDistributionCenters> = initValue) => {
  const { t } = useTranslation('distributionCenters');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
    setValue,
    formState,
  } = useForm({
    resolver: yupResolver(handlingCostSchema),
    defaultValues,
  });

  const commissionType = watch('handlingCost.type');

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
    (distributionCenters: Partial<IDistributionCenters>) => DistributionCentersService.updateCommission(distributionCenters),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_ONE_KEY]);
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
    watch,
    setValue,
    isLoading,
    isSuccess,
    data,
    commissionType,
    formState,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useDistributionCentersUpdateCommission;
