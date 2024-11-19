import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IWarehouseSupplier } from '../interfaces/IWarehouseSupplier';
import { warehouseSupplierSchema } from '../schemas/warehouse-supplier.shema';
import { WarehouseSupplierService } from '../services';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { WAREHOUSES_SUPPLIER_LIST_KEY } from '../constants';

export const initialUserInviteValue: IWarehouseSupplier = {
  priceConfig: {
    value: 10,
    type: PriceType.PERCENT,
  },
  supplier: null,
  warehouse: null,
};

const useWarehouseProviderSupplierCreateForm = (
  defaultValues: IWarehouseSupplier = initialUserInviteValue,
  onClose: () => void,
) => {
  const { t } = useTranslation('warehouse');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(warehouseSupplierSchema),
    defaultValues: defaultValues || initialUserInviteValue,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (payload: IWarehouseSupplier) => {
      return WarehouseSupplierService.addSupplier(payload);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries([WAREHOUSES_SUPPLIER_LIST_KEY]);
        toast.success(t('successWarehouseSupplier'));
        onClose?.();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    watch,
    reset: () => {
      resetMutation();
      reset();
    },
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useWarehouseProviderSupplierCreateForm;
