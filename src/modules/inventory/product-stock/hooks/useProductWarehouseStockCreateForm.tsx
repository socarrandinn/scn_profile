import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { IStock } from '../interfaces/IStock';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { productStockSchema } from 'modules/inventory/product/schemas/product-stock.schema';
import { StockService } from '../services';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { PRODUCTS_WAREHOUSE_STOCK } from '../constants/query-keys';

const initValues: IStock = {
  warehouse: '',
  operation: STOCK_OPERATIONS.ADDED,
  quantity: 1,
  note: '',
  cause: null,
  product: null,
};

const useProductWarehouseStockCreateForm = (onClose: () => void, defaultValues: IStock = initValues) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(productStockSchema),
    defaultValues,
  });

  const actualQuantity = watch('quantity');
  const operation = watch('operation');

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const finalQuantity = useCallback(
    (currentStock: number) => {
      switch (operation) {
        case STOCK_OPERATIONS.ADDED:
          return currentStock + Number(actualQuantity);
        case STOCK_OPERATIONS.DISCOUNTED:
          return Number(actualQuantity) >= currentStock ? 0 : currentStock - Number(actualQuantity);
        default:
          break;
      }
    },
    [operation, actualQuantity],
  );

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (stock: IStock) => StockService.updateStocks(stock),
    {
      onSuccess: (data: any, values: any) => {
        if (data) {
          queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_STOCK]);
        }
        queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_LIST_KEY, values.item, values.warehouse]);
        toast.success(t('updateStockSuccess'));
        onClose?.();
        reset();
      },
      onError: () => {
        toast.error(t('updateStockError'));
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    setValue,
    watch,
    quantity: {
      actualQuantity,
      finalQuantity,
    },
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useProductWarehouseStockCreateForm;
