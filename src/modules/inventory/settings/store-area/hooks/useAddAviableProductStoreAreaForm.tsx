import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { addProductStoreAreaSchema } from 'modules/inventory/settings/store-area/schemas/add-product-store-area.schema';
import { IStock } from 'modules/inventory/store/interfaces';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { StockService } from 'modules/inventory/store/services';
import { PRODUCTS_STORE_STOCK } from 'modules/inventory/product/constants/query-keys';
import { PRODUCTS_ONE_KEY } from 'modules/inventory/product/constants';

const initValues: IStock = {
  store: '',
  quantity: 0,
  operation: PRODUCT_STOCK_OPERATIONS.ADDED,
};

const useAddAviableProductStoreAreaForm = (productId: string, onClose: () => void, defaultValues: IStock = initValues) => {
  const { t } = useTranslation('storeArea');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(addProductStoreAreaSchema),
    defaultValues,
  });

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
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useAddAviableProductStoreAreaForm;
