import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IWarehouseSupplier } from '../interfaces/IWarehouseSupplier';
import { warehouseSupplierSchema } from '../schemas/warehouse-supplier.schema';
import { WarehouseSupplierService } from '../services';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { WAREHOUSES_SUPPLIER_LIST_KEY } from '../constants';
import { useSupplierRelationContext } from 'modules/inventory/product-stock/components/ErrorContents/SupplierNoRelation/hooks/useSupplierNotRelationContext';

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
  const { setRelationSupplier } = useSupplierRelationContext();
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

        // only by set add relation by import stock
        setRelationSupplier?.({
          supplier: variables.supplier as unknown as string,
          warehouse: variables.warehouse as unknown as string,
        });
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
