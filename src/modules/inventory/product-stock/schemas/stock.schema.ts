import * as Yup from 'yup';
import '@dfl/yup-validations';
import { stockCauseSchema } from 'modules/inventory/common/schemas/common-stock.schema';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';

const transformSchema = Yup.string()
  .required('required')
  .transform((w) => w?._id || w);

export const commonSchema = Yup.object().shape({
  item: transformSchema,
  operation: Yup.string().oneOf(Object.values(STOCK_OPERATIONS)).required('required'),
  quantity: Yup.number()
    .min(1, 'product:warehouseStockModal.error.quantity.minQuantity')
    .integer('product:warehouseStockModal.error.quantity.integer')
    .typeError('product:warehouseStockModal.error.quantity.integer'),
  note: Yup.string(),
  warehouse: transformSchema,
  warehouseArea: transformSchema,
});

// add stock to warehouse
export const stockWarehouseSchema = Yup.object().concat(commonSchema).concat(stockCauseSchema);

// import stock to warehouse
export const stockWarehouseImportStockSchema = Yup.object().shape({
  warehouse: transformSchema,
  file: Yup.mixed().required('required'),
});
