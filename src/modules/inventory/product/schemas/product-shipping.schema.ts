import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productShippingInfoSchema = Yup.object().shape({
  shippingSettings: Yup.object().shape({
    shippingInfo: Yup.object().shape({
      weight: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
      height: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
      length: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
      width: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
      fragile: Yup.boolean().default(false),
      needRefrigeration: Yup.boolean().default(false),
    }),
  }),
});

export const productShippingTimeSchema = Yup.object().shape({
  shippingSettings: Yup.object().shape({
    estimatedTime: Yup.object().shape({
      from: Yup.number().min(0, 'positiveNumber'),
      to: Yup.number()
        .min(0, 'positiveNumber')
        .test('to-is-max', 'errors:estimatedTime:to', (value: any, testContext) => {
          const form = testContext.parent.from;
          return form <= value;
        }),
    }),
  }),
});

export const productFreeShippingSchema = Yup.object().shape({
  shippingSettings: Yup.object().shape({
    freeShipping: Yup.boolean(),
  }),
});

export const productShippingSettingsSchema = productShippingInfoSchema
  .concat(productShippingTimeSchema)
  .concat(productFreeShippingSchema);
