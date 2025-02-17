import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export const stockCauseSchema = Yup.object().shape({
  cause: Yup.object()
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
      then: (schema) => schema.required('required'),
    })
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.ADDED,
      then: (schema) => schema.transform(() => undefined),
    }),

  responsible: Yup.string().when('cause', ([cause], schema) =>
    cause?.requiresResponsible ? schema.required('required') : schema.strip(),
  ),

  evidence: Yup.mixed().when('cause', ([cause], schema) =>
    cause?.requiresEvidence
      ? schema.required('required').transform((value) => {
          return Array.isArray(value) ? value?.[0]?.url || '' : value;
        })
      : schema.strip(),
  ),
});

export const stockInvoiceFileSchema = Yup.object().shape({
  file: Yup.mixed()
    .transform((value) => {
      return Array.isArray(value) ? value?.[0]?.url || '' : value;
    })
    .nullable()
    .optional(),
});
