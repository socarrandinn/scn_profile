import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { useCallback, useEffect } from 'react';
import { productStockSchema } from '../schemas/product-stock.schema';
import { CAUSE_TYPE, IStock } from '../interfaces/IStock';
import { PRODUCTS_WAREHOUSE_LIST_KEY, PRODUCTS_STORE_STOCK } from '../constants/query-keys';
import { StocksService } from '../services';

const initValues: IStock = {
  productId: '',
  warehouse: '',
  operation: PRODUCT_STOCK_OPERATIONS.ADDED,
  quantity: 0,
  file: '',
  note: '',
  cause: CAUSE_TYPE.LOSSES,
};

const useProductStockCreateForm = (onClose: () => void, defaultValues: IStock = initValues) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(productStockSchema),
    defaultValues,
  });

  const actualQuantity = watch('quantity');
  const operation = watch('operation');

  useEffect(() => {
    setValue('quantity', 1);
  }, [operation, setValue]);

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
      const { operation, cause, ...rest } = values;
      mutate({
        ...rest,
        operation,
        cause: operation === PRODUCT_STOCK_OPERATIONS.ADDED ? undefined : cause,
      });
    }),
  };
};

export default useProductStockCreateForm;
