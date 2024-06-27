import '@dfl/yup-validations';
import { percentValueSchema, priceValueSchema } from 'modules/inventory/product/schemas/product-price.schema';
import * as Yup from 'yup';
import { DISCOUNT_TYPE } from '../constants';

export const productDiscountSchema = Yup.object().shape({
  name: Yup.string().trim().required('required').min(4, 'min-4').max(255, 'max-255'),
  entity: Yup.string().trim().test('entityValue', 'errors:min-4', (value) => value?.length && value.length >= 4 || !value?.length).max(255, 'max-255'),
  discountType: Yup.string(),
  discount: Yup.number().when('type', (discountType, schema) => {
    if (discountType.includes(DISCOUNT_TYPE.FIXED)) {
      return schema.concat(priceValueSchema);
    } else if (discountType.includes(DISCOUNT_TYPE.PERCENTAGE)) {
      return schema.concat(percentValueSchema);
    } else {
      return schema;
    }
  }),
  startDate: Yup.date().required('required').typeError('validDate').max(Yup.ref('endDate'), 'validMaxFromDate'),
  endDate: Yup.date().required('required').typeError('validDate').min(Yup.ref('startDate'), 'validMinToDate')
});
