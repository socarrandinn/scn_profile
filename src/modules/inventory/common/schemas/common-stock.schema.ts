import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export const stockCauseSchema = Yup.object().shape({
  cause: Yup.string()
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
      then: (schema) => schema.required('required').transform((c) => c?._id || c),
    })
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.ADDED,
      then: (schema) => schema.transform(() => undefined),
    }),
});

export const stockInvoiceFileSchema = Yup.object().shape({
  file: Yup.string().transform((file) => file?.[0]?.url || file?.url || file),
});
