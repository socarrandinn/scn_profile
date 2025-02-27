import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { addWarehousesSchema } from 'modules/inventory/distribution-centers/schemas/distribution-centers.schema';
import { IAddWarehouses } from 'modules/inventory/distribution-centers/interfaces';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTER_WAREHOUSE_LIST_KEY } from 'modules/inventory/distribution-centers/constants';
import { useEffect, useCallback } from 'react';
import { WAREHOUSES_ONE_KEY } from 'modules/inventory/warehouse/constants';

export const initValues: IAddWarehouses = {
  warehouses: [],
  distributionCenter: null,
};

const useDistributionCentersWarehouseAddForm = (onClose: () => void, defaultValues: IAddWarehouses = initValues) => {
  const { t } = useTranslation('distributionCenters');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(addWarehousesSchema),
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
  } = useMutation((payload: IAddWarehouses) => DistributionCentersService.addWarehouse(payload), {
    onSuccess: (data, values) => {
      console.log(values)
      queryClient.invalidateQueries([DISTRIBUTION_CENTER_WAREHOUSE_LIST_KEY]);
      queryClient.invalidateQueries([values?.warehouses?.[0], WAREHOUSES_ONE_KEY]);
      toast.success(t('successAdd'));
      onClose?.();
      resetForm();
    },
  });

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
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useDistributionCentersWarehouseAddForm;
