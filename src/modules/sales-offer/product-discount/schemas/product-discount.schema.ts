import * as Yup from 'yup';
import '@dfl/yup-validations';
import { combinedPriceValueSchema } from 'modules/inventory/product/schemas/product-price.schema';

export const productDiscountSchema = Yup.object().shape({
  name: Yup.string().trim().required('required').min(4, 'min-4').max(255, 'max-255'),
  entity: Yup.string().trim().test('entityValue', 'errors:min-4', (value) => value?.length && value.length >= 4 || !value?.length).max(255, 'max-255'),
  description: Yup.string().trim().required('required').min(4, 'min-4'),
  offer: combinedPriceValueSchema.test('requiredValue', 'required', (offer) => !!offer?.value),
  from: Yup.date().required('required').typeError('validDate').max(Yup.ref('to'), 'validMaxFromDate'),
  to: Yup.date().required('required').typeError('validDate').min(Yup.ref('from'), 'validMinToDate')
});
