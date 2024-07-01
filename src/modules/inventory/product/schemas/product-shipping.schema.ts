import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productShippingInfoSchema = Yup.object().shape({
  deliveryRules: Yup.object().shape({
    policy: Yup.string().required(),
    regions: Yup.array().of(
      Yup.object().shape({
        city: Yup.string(),
        state: Yup.string(),
        country: Yup.string(),
      }),
    ),
  }),

  shippingInfo: Yup.object().shape({
    weight: Yup.number()
      .transform((weight: number) => (isNaN(weight) ? 0 : weight))
      .min(0, 'positiveNumber')
      .typeError('invalidValue-number'),
    height: Yup.number()
      .transform((height: number) => (isNaN(height) ? 0 : height))
      .min(0, 'positiveNumber')
      .typeError('invalidValue-number'),
    length: Yup.number()
      .transform((length: number) => (isNaN(length) ? 0 : length))
      .min(0, 'positiveNumber')
      .typeError('invalidValue-number'),
    width: Yup.number()
      .transform((width: number) => (isNaN(width) ? 0 : width))
      .min(0, 'positiveNumber')
      .typeError('invalidValue-number'),
  }),

  // extras
  province: Yup.string().nullable(),
  municipality: Yup.string().nullable(),
});
