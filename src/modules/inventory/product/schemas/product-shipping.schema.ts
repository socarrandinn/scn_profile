import * as Yup from 'yup';

export const productShippingInfoSchema = Yup.object().shape({
  weight: Yup.string(),
  rules: Yup.array(),
  size: Yup.object().shape({
    long: Yup.string(),
    wide: Yup.string(),
    high: Yup.string(),
  }),
});
