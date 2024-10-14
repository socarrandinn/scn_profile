import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export const addProductWarehouseAreaSchema = Yup.object().shape({
  warehouse: Yup.string()
    .required('required')
    .transform((e) => e?._id || e),
  quantity: Yup.number()
    .required('required')
    .min(1, 'product:warehouseStockModal:error:quantity:min')
    .integer('product:warehouseStockModal:error:quantity:integer'),
  operation: Yup.string().required('required').default(PRODUCT_STOCK_OPERATIONS.ADDED),
  note: Yup.string().min(4, 'min-4'),
  warehouseArea: Yup.string().required('required'),
});

export const updateProductStockSchema = Yup.object().shape({
  warehouse: Yup.string()
    .required('required')
    .transform((e) => e?._id || e),
  quantity: Yup.number()
    .required('required')
    .min(1, 'product:warehouseStockModal:error:quantity:min')
    .integer('product:warehouseStockModal:error:quantity:integer'),
  operation: Yup.string().required('required').default(PRODUCT_STOCK_OPERATIONS.ADDED),
  note: Yup.string().min(4, 'min-4'),
  cause: Yup.string().when('operation', {
    is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
    then: (schema) => schema.required('required'),
  }),
});
