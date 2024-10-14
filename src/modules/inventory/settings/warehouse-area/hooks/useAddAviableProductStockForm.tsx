import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { addProductStoreAreaSchema } from 'modules/inventory/settings/warehouse-area/schemas/add-product-store-area.schema';
import { IStock } from 'modules/inventory/warehouse/interfaces';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { StockService } from 'modules/inventory/warehouse/services';
import { PRODUCTS_STORE_STOCK } from 'modules/inventory/product/constants/query-keys';
import { PRODUCTS_ONE_KEY } from 'modules/inventory/product/constants';

const initValues: IStock = {
  store: '',
  quantity: 1,
  storeArea: '',
  operation: PRODUCT_STOCK_OPERATIONS.ADDED,
};

const useAddAviableProductStockForm = (
  productId: string,
  onClose: () => void,
  defaultValues: IStock = initValues,
) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(addProductStoreAreaSchema),
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
          return currentStock - Number(actualQuantity);
        default:
          break;
      }
    },
    [operation, actualQuantity],
  );

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    // @ts-ignore
    (values: IStock) => StockService.setStockByProductId(productId, values),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PRODUCTS_STORE_STOCK]);
        queryClient.invalidateQueries([productId, PRODUCTS_ONE_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'updateStockSuccess' : 'createdStockSuccess'));
        onClose?.();
        reset();
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
    operation,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useAddAviableProductStockForm;
