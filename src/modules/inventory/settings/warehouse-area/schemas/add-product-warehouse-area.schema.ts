import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { stockCauseSchema } from 'modules/inventory/common/schemas/common-stock.schema';

export const addProductWarehouseAreaSchema = Yup.object()
  .shape({
    warehouse: Yup.string()
      .required('required')
      .transform((e) => e?._id || e),
    quantity: Yup.number()
      .required('required')
      .min(1, 'product:warehouseStockModal:error:quantity:min')
      .integer('product:warehouseStockModal:error:quantity:integer')
      .typeError('product:warehouseStockModal.error.quantity.integer'),
    operation: Yup.string().required('required').default(PRODUCT_STOCK_OPERATIONS.ADDED),
    note: Yup.string().min(4, 'min-4'),
    warehouseArea: Yup.string(),
  })
  .concat(stockCauseSchema);

export const updateProductStockSchema = Yup.object()
  .shape({
    warehouse: Yup.string()
      .required('required')
      .transform((e) => e?._id || e),
    quantity: Yup.number()
      .required('required')
      .min(1, 'product:warehouseStockModal:error:quantity:min')
      .integer('product:warehouseStockModal:error:quantity:integer')
      .typeError('product:warehouseStockModal.error.quantity.integer'),
    operation: Yup.string().required('required').default(PRODUCT_STOCK_OPERATIONS.ADDED),
    note: Yup.string().min(4, 'min-4'),
  })
  .concat(stockCauseSchema);
