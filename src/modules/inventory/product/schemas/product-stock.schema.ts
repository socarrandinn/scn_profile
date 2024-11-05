import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { stockCauseSchema } from 'modules/inventory/common/schemas/common-stock.schema';

export const productStockSchema = Yup.object()
  .shape({
    productId: Yup.string().required('required'),
    operation: Yup.string().oneOf(Object.values(PRODUCT_STOCK_OPERATIONS)).required('required'),
    quantity: Yup.number()
      .min(1, 'product:warehouseStockModal.error.quantity.minQuantity')
      .integer('product:warehouseStockModal.error.quantity.integer')
      .typeError('product:warehouseStockModal.error.quantity.integer'),
    note: Yup.string(),
    file: Yup.string(),
    warehouse: Yup.string()
      .required('required')
      .transform((warehouse) => warehouse?._id || warehouse),
  })
  .concat(stockCauseSchema);

export const productWarehouseStockSchema = Yup.object().shape({
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
        operation: Yup.string().oneOf(Object.values(PRODUCT_STOCK_OPERATIONS)).required('required'),
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
