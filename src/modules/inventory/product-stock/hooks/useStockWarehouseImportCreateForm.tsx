import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IStockWarehouseImport } from '../interfaces/IStock';
import { StockService } from '../services';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { PRODUCTS_WAREHOUSE_STOCK } from '../constants/query-keys';
import { stockWarehouseSchema } from '../schemas/stock.schema';

const initValues: IStockWarehouseImport = {
  warehouse: null,
  file: [],
};

const useStockWarehouseImportCreateForm = (
  onClose: () => void,
  defaultValues: IStockWarehouseImport = initValues,
  schema: any = stockWarehouseSchema,
) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (stock: IStockWarehouseImport) => StockService.uploadStock(stock),
    {
      onSuccess: (data: any, values: any) => {
        if (data) {
          queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_STOCK]);
        }
        queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_LIST_KEY, values.item, values.warehouse]);
        toast.success(t('importStockSuccess'));
        onClose?.();
        reset();
      },
      onError: () => {
        toast.error(t('importStockError'));
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
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useStockWarehouseImportCreateForm;
