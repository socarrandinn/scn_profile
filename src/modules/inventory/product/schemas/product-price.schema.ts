import * as Yup from 'yup';
import { PriceType } from '../interfaces/IProductPriceDetails';

const priceValueSchema = Yup.number().typeError('validNumber').positive('positiveNumber').required('required');

const percentValueSchema = Yup.number()
  .typeError('validNumber')
  .default(0)
  .min(0, 'positiveNumber')
  .max(100, 'max-100-num');

const combinedPriceValueSchema = Yup.object().shape({
  type: Yup.string().required('Type is required'),
  value: Yup.number().when('type', (type, schema) => {
    if (type.includes(PriceType.FIXED)) {
      return schema.concat(priceValueSchema);
    } else if (type.includes(PriceType.PERCENT)) {
      return schema.concat(percentValueSchema);
    } else {
      return schema;
    }
  }),
});

const distributionPriceSchema = Yup.object().shape({
  cost: priceValueSchema,
  otherCost: percentValueSchema,
  logistic: combinedPriceValueSchema,
  shipping: percentValueSchema,
  commercial: percentValueSchema,
  offer: percentValueSchema,
  platform: percentValueSchema,
});

const priceDetailsSchema = Yup.object().shape({
  distribution: distributionPriceSchema,
});

export const productPriceSchema = Yup.object().shape({
  priceDetails: priceDetailsSchema,
});
