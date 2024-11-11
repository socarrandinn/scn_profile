import * as Yup from 'yup';
import '@dfl/yup-validations';
import { stockCauseSchema } from 'modules/inventory/common/schemas/common-stock.schema';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';

const warehouseSchema = Yup.string()
  .required('required')
  .transform((w) => w?._id || w);

export const commonSchema = Yup.object().shape({
  item: Yup.string().required('required'),
  operation: Yup.string().oneOf(Object.values(STOCK_OPERATIONS)).required('required'),
  quantity: Yup.number()
    .min(1, 'product:warehouseStockModal.error.quantity.minQuantity')
    .integer('product:warehouseStockModal.error.quantity.integer')
    .typeError('product:warehouseStockModal.error.quantity.integer'),
  note: Yup.string(),
  warehouse: warehouseSchema,
  warehouseArea: warehouseSchema,
});

// add stock to warehouse
export const stockWarehouseSchema = Yup.object().concat(commonSchema).concat(stockCauseSchema);

// import stock to warehouse
export const stockWarehouseStockSchema = Yup.object().shape({ warehouse: warehouseSchema });
