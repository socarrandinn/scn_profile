import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { PRODUCTS_WAREHOUSE_STOCK } from '../../product/constants/query-keys';
import { stockWarehouseSchema } from 'modules/inventory/product-stock/schemas/stock.schema';
import { IStock } from '../interfaces/IStock';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { StockService } from '../services';
import { stockInvoiceFileSchema } from 'modules/inventory/common/schemas/common-stock.schema';
import { WAREHOUSE_PRODUCTS_STOCK } from 'modules/inventory/warehouse/constants';

const initValues: IStock = {
  item: null, // productId
  warehouse: null,
  operation: STOCK_OPERATIONS.ADDED,
  quantity: 1,
  file: [],
  note: '',
  cause: null,
};

const useProductStockCreateForm = (onClose: () => void, defaultValues: IStock = initValues) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, watch, setValue, formState } = useForm({
    resolver: yupResolver(stockWarehouseSchema.concat(stockInvoiceFileSchema)),
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
        queryClient.invalidateQueries([WAREHOUSE_PRODUCTS_STOCK]);
        queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_STOCK]);
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
    formState,
    isAdd: operation === STOCK_OPERATIONS.ADDED,
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
