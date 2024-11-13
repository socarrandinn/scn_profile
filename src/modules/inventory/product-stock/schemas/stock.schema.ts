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

export const productListWarehouseStockSchema = Yup.object().shape({
  items: Yup.array().of(
    Yup.object()
      .shape({
        item: Yup.string()
          .transform((el) => el._id || el)
          .required('required'),
        quantity: Yup.number()
          .min(0, 'product:warehouseStockModal:error:quantity:min')
          .integer('product:warehouseStockModal:error:quantity:integer')
          .transform((value) => (isNaN(value) ? undefined : value))
          .nullable(),
        stock: Yup.number(),
        operation: Yup.string().oneOf(Object.values(STOCK_OPERATIONS)).required('required'),
      })
      .concat(stockCauseSchema),
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
