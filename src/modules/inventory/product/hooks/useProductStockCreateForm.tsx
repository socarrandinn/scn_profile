import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { useCallback, useEffect } from 'react';
import { stockWarehouseSchema } from '../schemas/product-stock.schema';
import { IStock } from '../interfaces/IStock';
import { PRODUCTS_WAREHOUSE_LIST_KEY, PRODUCTS_STORE_STOCK } from '../constants/query-keys';
import { StocksService } from '../services';

const initValues: IStock = {
  productId: '',
  warehouse: '',
  operation: PRODUCT_STOCK_OPERATIONS.ADDED,
  quantity: 1,
  file: '',
  note: '',
  cause: null,
};

const useProductStockCreateForm = (onClose: () => void, defaultValues: IStock = initValues) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(stockWarehouseSchema),
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
        case PRODUCT_STOCK_OPERATIONS.ADDED:
          return currentStock + Number(actualQuantity);
        case PRODUCT_STOCK_OPERATIONS.DISCOUNTED:
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
    (stock: IStock) => StocksService.updateStocks(stock),
    {
      onSuccess: (data: any, values: any) => {
        if (data) {
          queryClient.invalidateQueries([PRODUCTS_STORE_STOCK]);
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
    isAdd: operation === PRODUCT_STOCK_OPERATIONS.ADDED,
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

export default useProductStockCreateForm;
