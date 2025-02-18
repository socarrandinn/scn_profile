import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { mapperFile } from 'utils/file-utils';
import { IFile } from 'components/FileDropZone/interfaces/IFile';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';

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

  responsible: Yup.string().when('cause', {
    is: (cause: IStockReductionCause) => cause?.requiresResponsible,
    then: (schema) => schema.required('required'),
    otherwise: (schema) => schema.strip(),
  }),

  evidence: Yup.array().when('cause', {
    is: (cause: IStockReductionCause) => cause?.requiresEvidence,
    then: (schema) =>
      schema.min(1, 'required').transform((values) => values?.map((file: IFile) => mapperFile(file)) || []),
    otherwise: (schema) => schema.strip(),
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
