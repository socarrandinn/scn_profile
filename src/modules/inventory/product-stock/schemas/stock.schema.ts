import * as Yup from 'yup';
import '@dfl/yup-validations';
import { stockCauseSchema } from 'modules/inventory/common/schemas/common-stock.schema';
import { STOCK_OPERATIONS } from '../constants/stock-operations.constants';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

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

export const causeSchema = Yup.object().shape({
  cause: Yup.string()
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
      then: (schema) => schema.required('required'),
    })
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.ADDED,
      then: (schema) => schema.transform(() => undefined),
    }),
});

// add stock to warehouse
export const stockWarehouseSchema = Yup.object().concat(commonSchema).concat(causeSchema);

// import stock to warehouse
export const stockWarehouseImportStockSchema = Yup.object().shape({
  warehouse: transformSchema,
  file: Yup.mixed().required('required'),
});
