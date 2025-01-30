import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { IStock, IStockManyWarehouse, IStockProductItem } from '../interfaces/IStock';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { StockService } from '../services';
import { pick } from 'lodash';
import { stockWarehouseSchema } from '../schemas/stock.schema';
import { PRODUCTS_ONE_KEY } from 'modules/inventory/product/constants';
import { PRODUCTS_WAREHOUSE_STOCK } from '../constants/query-keys';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from 'modules/inventory/product/constants/query-keys';

const initValues: IStock = {
  item: null,
  warehouse: null,
  warehouseArea: null,
  operation: STOCK_OPERATIONS.ADDED,
  quantity: 1,
  note: '',
  cause: null,
};

const useStockWarehouseCreateForm = (
  onClose: () => void,
  defaultValues: IStock = initValues,
  schema: any = stockWarehouseSchema,
) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();

  const [dataStock, setDataStock] = useState<IStockProductItem[]>([]);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    // formState: { errors },
  } = useForm({
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
    reset: resetMutation,
  } = useMutation((stock: IStockManyWarehouse) => StockService.manyStock(stock), {
    onSuccess: (data: any, values: any) => {
      const productId = values.items?.[0]?.item;
      queryClient.invalidateQueries([productId, PRODUCTS_ONE_KEY]);
      queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_STOCK]);
      queryClient.invalidateQueries([PRODUCTS_WAREHOUSE_LIST_KEY]);
      queryClient.invalidateQueries([productId, values.warehouse]);
      toast.success(t('updateStockSuccess'));
      if (values.notClosed) {
        setDataStock((prevArray) => {
          return [
            ...prevArray,
            {
              ...values.items?.[0],
            },
          ];
        });
      } else {
        onClose?.();
        setDataStock([]);
      }
      reset();
    },
  });

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    setValue,
    watch,
    reset: () => {
      reset();
      resetMutation();
      setDataStock([]);
    },
    onSubmit: handleSubmit((values) => {
      const payload = getPayload(values);
      mutate(payload);
    }),
    onContinueSubmit: handleSubmit((values) => {
      const payload = getPayload(values);
      mutate({ ...payload, notClosed: true });
    }),
    items: dataStock,
  };
};

export default useStockWarehouseCreateForm;

const getPayload = (value: IStock): IStockManyWarehouse => {
  const { warehouse, note } = value;
  return {
    items: [pick(value, ['item', 'cause', 'quantity', 'operation', 'warehouseArea'])],
    warehouse,
    note,
  };
};
