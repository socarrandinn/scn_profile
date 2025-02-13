import '@dfl/yup-validations';
import { percentValueSchema, priceValueSchema } from 'modules/inventory/product/schemas/product-price.schema';
import * as Yup from 'yup';
import { DISCOUNT_TYPE } from '../constants';
import { IProductDiscount } from '../interfaces';
import { startOfDay } from 'date-fns';

const today = startOfDay(new Date());

export const productDiscountSchema = Yup.object().shape({
  name: Yup.string().trim().required('required').min(4, 'min-4').max(255, 'max-255'),
  entity: Yup.string()
    .trim()
    .test('entityValue', 'errors:min-4', (value) => (value?.length && value.length >= 4) || !value?.length)
    .max(255, 'max-255'),

  discountConfig: Yup.object().shape({
    type: Yup.string()
      .oneOf(Object.values(DISCOUNT_TYPE))
      .transform((value) => (!value ? DISCOUNT_TYPE.FIXED : value)),
    value: Yup.number().when('type', (type, schema) => {
      if (type.includes(DISCOUNT_TYPE.FIXED)) {
        return schema.concat(priceValueSchema);
      } else if (type.includes(DISCOUNT_TYPE.PERCENTAGE)) {
        return schema.concat(percentValueSchema);
      } else {
        return schema;
      }
    }),
  }),

  fromDate: Yup.date().required('required').typeError('validDate').min(today, 'minDateNow'),
  toDate: Yup.date().required('required').typeError('validDate').min(Yup.ref('fromDate'), 'validMinToDate'),
  products: Yup.array()
    .min(1, 'productDiscount:errors.oneProduct')
    .transform((products: any[]) => products.map((product) => (typeof product === 'object' ? product._id : product))),
});

export const productDiscountBulkAddSchema = Yup.object().shape({
  productDiscount: Yup.string()
    .required('required')
    .nullable()
    .transform((prod: IProductDiscount) => (typeof prod === 'object' ? prod?._id : prod)),
});
