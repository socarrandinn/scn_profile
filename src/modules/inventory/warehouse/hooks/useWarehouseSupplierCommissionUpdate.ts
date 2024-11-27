import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IPriceConfigUpdate } from '../interfaces/IWarehouseSupplier';
import { WAREHOUSES_SUPPLIER_LIST_KEY } from '../constants';
import { WarehouseSupplierService } from '../services';
import { warehouseSupplierSchema } from '../schemas/warehouse-supplier.schema';

const initValues: IPriceConfigUpdate = {
  priceConfig: {
    type: PriceType.FIXED,
    value: 0,
  },
  supplier: '',
  warehouse: ''
};

const useWarehouseSupplierCommissionUpdate = (onClose: () => void, defaultValues: IPriceConfigUpdate = initValues) => {
  const { t } = useTranslation('warehouse');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(warehouseSupplierSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation((values: any) => WarehouseSupplierService.updateCommission(values), {
    onSuccess: () => {
      toast.success(t('supplier.successCommissionUpdate'));
      queryClient.invalidateQueries([WAREHOUSES_SUPPLIER_LIST_KEY]);
      onClose?.();
      reset();
    },
  });

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    values: formState.errors,
    handleSubmit,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useWarehouseSupplierCommissionUpdate;
