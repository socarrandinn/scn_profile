import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { OTHER_COST_OWNERSHIP_TYPE } from '../constants/product-other-cost.enum';

export const priceValueSchema = Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number');

export const percentValueSchema = Yup.number()
  .min(0, 'positiveNumber')
  .max(100, 'max-100-num')
  .typeError('invalidValue-number');

export const combinedPriceValueSchema = Yup.object().shape({
  type: Yup.string(),
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

export const otherCostSchema = Yup.array(
  Yup.object().shape({
    ownershipType: Yup.mixed<OTHER_COST_OWNERSHIP_TYPE>().oneOf(Object.values(OTHER_COST_OWNERSHIP_TYPE)),
    ownership: Yup.string().when('ownershipType', {
      is: (value: OTHER_COST_OWNERSHIP_TYPE | undefined) => !!value,
      then: (schema) => schema.required('required').transform((el) => (typeof el === 'string' ? el : el?._id)),
    }),
    ownershipName: Yup.string().when('ownership', {
      is: (value: any) => !!value,
      then: (schema) => schema.required('required'),
    }),
    type: Yup.string().required(),
    value: Yup.number()
      .required()
      .when('type', (type, schema) => {
        if (type.includes(PriceType.FIXED)) {
          return schema.concat(priceValueSchema);
        } else if (type.includes(PriceType.PERCENT)) {
          return schema.concat(percentValueSchema);
        } else {
          return schema;
        }
      }),
  }),
);

const distributionPriceSchema = Yup.object().shape({
  cost: Yup.object().shape({
    value: Yup.number().required('required').min(1, 'positiveNumber').typeError('invalidValue-number'),
  }),
  otherCost: otherCostSchema,
  logistic: combinedPriceValueSchema,
  shipping: combinedPriceValueSchema,
  commercial: combinedPriceValueSchema,
  offer: combinedPriceValueSchema,
  platform: combinedPriceValueSchema,
});

const priceDetailsSchema = Yup.object().shape({
  distribution: distributionPriceSchema,
});

export const productPriceSchema = Yup.object().shape({
  priceDetails: priceDetailsSchema,
});
