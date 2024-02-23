import * as Yup from 'yup';
import '@dfl/yup-validations';
import { combinedPriceValueSchema } from 'modules/inventory/product/schemas/product-price.schema';

export const causeCancellationSchema = Yup.object().shape({
  type: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().min(4, 'min-4'),
  visibility: Yup.boolean().required('required'),
});

export const causeCancellationSettingsSchema = Yup.object().shape({
  maxElapsingTime: Yup.number().required('required').min(0, 'min-0'),
  reimbursementCharge: combinedPriceValueSchema,
});
