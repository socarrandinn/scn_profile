import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';

export const stockCauseSchema = Yup.object().shape({
  cause: Yup.string()
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.DISCOUNTED,
      then: (schema) => schema.required('required').transform((c) => (c && typeof c === 'object' ? c._id : c)),
    })
    .when('operation', {
      is: PRODUCT_STOCK_OPERATIONS.ADDED,
      then: (schema) => schema.transform(() => undefined),
    }),

  provider: Yup.mixed().test('required-provider', 'required', function (value) {
    const { cause } = this.parent;
    if (cause?.requiresResponsible && (!value || typeof value !== 'string')) {
      return false; 
    }
    return true;
  }),

  evidence: Yup.mixed().test('required-evidence', 'required', function (value) {
    const { cause } = this.parent;
    if (cause?.requiresEvidence && (!value || typeof value !== 'string')) {
      return false;
    }
    return true;
  }),
});

export const stockInvoiceFileSchema = Yup.object().shape({
  file: Yup.mixed()
    .transform((value) => {
      return Array.isArray(value) ? value?.[0]?.url || '' : value;
    })
    .nullable()
    .optional(),
});
