import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IStockWarehouseImport } from '../interfaces/IStock';
import { StockService } from '../services';
import { PRODUCTS_WAREHOUSE_STOCK } from 'modules/inventory/product/constants/query-keys';

import { stockWarehouseSchema } from '../schemas/stock.schema';
import { IStockSummary } from '../interfaces/IStockSummary';
import { WAREHOUSE_PRODUCTS_STOCK } from 'modules/inventory/warehouse/constants';

const initValues: IStockWarehouseImport = {
  warehouse: null,
  file: null,
};

const useStockWarehouseImportCreateForm = (
  onClose: () => void,
  defaultValues: IStockWarehouseImport = initValues,
  schema: any = stockWarehouseSchema,
) => {
  const { t } = useTranslation('stock');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
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
  } = useMutation((stock: IStockWarehouseImport) => StockService.importStock(stock), {
    onSuccess: (data: any, values: any) => {
      queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_STOCK]);
      queryClient.invalidateQueries([WAREHOUSE_PRODUCTS_STOCK]);
      toast.success(t('importStockSuccess'));
    },
  });

  return {
    control,
    error: error as IStockSummary,
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

export default useStockWarehouseImportCreateForm;
