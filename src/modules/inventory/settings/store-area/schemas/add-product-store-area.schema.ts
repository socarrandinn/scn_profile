import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export const addProductStoreAreaSchema = Yup.object().shape({
  store: Yup.string()
    .required('required')
    .transform((e) => e?._id || e),
  quantity: Yup.number()
    .required('required')
    .min(1, 'product:storeStockModal:error:quantity:min')
    .integer('product:storeStockModal:error:quantity:integer'),
  operation: Yup.string().required('required').default(PRODUCT_STOCK_OPERATIONS.ADDED),
  note: Yup.string().min(4, 'min-4'),
  storeArea: Yup.string().required('required'),
});

export const updateProductStockSchema = Yup.object().shape({
  store: Yup.string()
    .required('required')
    .transform((e) => e?._id || e),
  quantity: Yup.number()
    .required('required')
    .min(1, 'product:storeStockModal:error:quantity:min')
    .integer('product:storeStockModal:error:quantity:integer'),
  operation: Yup.string().required('required').default(PRODUCT_STOCK_OPERATIONS.ADDED),
  note: Yup.string().min(4, 'min-4'),
  cause: Yup.string().when('operation', {
    is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
    then: (schema) => schema.required('required'),
  }),
});
