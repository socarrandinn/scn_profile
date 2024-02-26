import * as Yup from 'yup';

export const productShippingInfoSchema = Yup.object().shape({
  shipping: Yup.object().shape({
    weight: Yup.number()
      .transform((weight: number) => (isNaN(weight) ? 0 : weight))
      .min(0, 'positiveNumber')
      .typeError('invalidValue-number'),
    free: Yup.boolean(),
    // rules: Yup.object().shape({
    //   place: Yup.array(),
    //   via: Yup.string().oneOf(['DENY', 'ALLOW']),
    // }),
    size: Yup.object().shape({
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
  }),
  rules: Yup.object().shape({
    limitByAge: Yup.boolean(),
    limitByOrder: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
  }),
});
