import * as Yup from 'yup';

const priceValueSchema = Yup.object().shape({
  value: Yup.number().typeError('validNumber').positive('positiveNumber').required('required'),
});

const percentValueSchema = Yup.object().shape({
  value: Yup.number().typeError('validNumber').default(0).min(0, 'positiveNumber').max(100, 'max-100-num'),
});

const distributionPriceSchema = Yup.object().shape({
  cost: priceValueSchema,
  otherCost: percentValueSchema,
  logistic: percentValueSchema,
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
