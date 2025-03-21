import { TWO_FOR_ONE_OPERATOR } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import * as Yup from 'yup';

export const offerTypeTwoForOneSchema = Yup.object().shape({
  type: Yup.string().default(TWO_FOR_ONE_OPERATOR.EVERY).required('required'),
  buyValue: Yup.number().required('required').positive('positiveNumber').integer('integerNumber'),
  getValue: Yup.number().required('required').positive('positiveNumber').integer('integerNumber'),
  buyProduct: Yup.string()
    .required('required')
    .transform((p) => p?._id || p),
  getProduct: Yup.string()
    .required('required')
    .transform((p) => p?._id || p),
});

export const offerProductIncludeSchema = Yup.object().shape({
  product: Yup.string().required('required').transform((p) => p?._id || p),
  quantity: Yup.number().positive('positiveNumber').integer('integerNumber').required('required'),
});
