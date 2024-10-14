import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export const productStockSchema = Yup.object().shape({
  productId: Yup.string().required('required'),
  operation: Yup.string().oneOf(Object.values(PRODUCT_STOCK_OPERATIONS)).required('required'),
  quantity: Yup.number().min(0),
  note: Yup.string(),
  file: Yup.string(),
  // @ts-ignore
  cause: Yup.string().when('operation', {
    is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
    then: Yup.string().required('required'),
  }),
  warehouse: Yup.string()
    .required('required')
    .transform((store) => store?._id || store),
});

export const productWharehouseStockSchema = Yup.object().shape({
  item: Yup.string()
    .transform((el) => el._id || el)
    .required('required'),
  warehouse: Yup.string()
    .transform((el) => el._id || el)
    .required('required'),
  quantity: Yup.number().min(-1),
  note: Yup.string(),
  file: Yup.string(),
});

export const productListWarehouseStockSchema = Yup.object().shape({
  items: Yup.array().of(
    Yup.object().shape({
      item: Yup.string()
        .transform((el) => el._id || el)
        .required('required'),
      quantity: Yup.number()
        .min(0, 'product:storeStockModal:error:quantity:min')
        .integer('product:storeStockModal:error:quantity:integer')
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable(),
      stock: Yup.number(),
      operation: Yup.string().oneOf(Object.values(PRODUCT_STOCK_OPERATIONS)).required('required'),
      // @ts-ignore
      cause: Yup.string().when(['operation'], {
        is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
        then: Yup.string().required('required'),
      }),
    }),
  ),
  warehouse: Yup.lazy((value) => {
    switch (typeof value) {
      case 'object':
        return Yup.object().required('required'); // schema for object
      case 'string':
        return Yup.string().required('required'); // schema for string
      default:
        return Yup.mixed().required('required'); // here you can decide what is the default
    }
  }),
});
