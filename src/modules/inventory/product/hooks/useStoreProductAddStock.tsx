import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { PRODUCT_STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { StocksService } from '../services';
import { PRODUCTS_LIST_KEY } from '../constants';
import { WAREHOUSES_ONE_KEY } from 'modules/inventory/warehouse/constants';
import { IAddProductStock, IPartialStock } from '../interfaces/IStock';
import { productListWarehouseStockSchema } from '../schemas/product-stock.schema';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from '../constants/query-keys';

const initValues: IAddProductStock = {
  items: [] as IPartialStock[],
  warehouse: '',
  codeProduct: '',
  errorProduct: '',
  fileStock: '',
  response: {},
  listErrorFile: [],
  // note
  note: '',
  file: '',
};

const useStoreProductAddStock = (onClose: () => void, defaultValues: IAddProductStock = initValues) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setError,
    setValue,
    clearErrors,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productListWarehouseStockSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (stock: IAddProductStock) => StocksService.manyStock(stock),
    {
      onSuccess: (data: any, values: any) => {
        values?.warehouse && queryClient.invalidateQueries([values.warehouse, WAREHOUSES_ONE_KEY]);
        queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_LIST_KEY]);
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
        queryClient.invalidateQueries({});
        setValue('response', data);
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
    watch,
    setError,
    clearErrors,
    resetField,
    errors,
    error,
    isLoading,
    isSuccess,
    data,
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      const stocks = {
        items: mapperItems(values?.items),
        warehouse: values?.warehouse,
        note: values?.note,
        file: values?.file,
      };
      mutate(stocks);
    }),
  };
};

export default useStoreProductAddStock;

const mapperItems = (items: IPartialStock[]) => {
  const mapper = items?.map((item: IPartialStock) => {
    if (item.operation === PRODUCT_STOCK_OPERATIONS.ADDED) {
      return {
        ...item,
        cause: undefined,
      };
    }
    return item;
  });
  return mapper;
};
