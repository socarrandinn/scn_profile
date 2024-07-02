import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ImagesScheme } from 'modules/common/schemas';
import { productGeneralInfoSchema } from 'modules/inventory/product/schemas/product-general-info.schema';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import { productProviderSchema } from 'modules/inventory/product/schemas/product-organization.schema';

export const productScoreSchema = Yup.object().shape({
  score: Yup.number().min(0),
});
export const productReleatedSchema = Yup.object().shape({
  related: Yup.array(),
});

export const productSEOSchema = Yup.object().shape({
  seo: Yup.object().shape({
    name: Yup.string().min(2, 'min-2').max(255, 'max-255'),
    description: Yup.string().min(2, 'min-2').max(255, 'max-255'),
    slugUrl: Yup.string().min(2, 'min-2').max(255, 'max-255'),
    canocicURL: Yup.string().min(2, 'min-2').max(255, 'max-255'),
  }),
});

export const productMediaSchema = Yup.object().shape({
  media: ImagesScheme,
});

export const productRulesSchema = Yup.object().shape({
  rules: Yup.object().shape({
    limitByAge: Yup.boolean(),
    free: Yup.boolean(),
    limitByOrder: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
    needCi: Yup.boolean(),
  }),
});

export const productSchema = productGeneralInfoSchema
  .concat(productPriceSchema)
  .concat(productProviderSchema)
  .concat(productRulesSchema)
  .concat(
    Yup.object().shape({
      shippingSettings: Yup.object().shape({
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
          weight: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
          height: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
          length: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
          width: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
        }),
        estimatedTime: Yup.object().shape({
          from: Yup.number().min(0, 'positiveNumber'),
          to: Yup.number()
            .min(0, 'positiveNumber')
            .test('to-is-max', 'errors:estimatedTime:to', (value: any, testContext) => {
              const form = testContext.parent.from;
              return form <= value;
            }),
        }),
        freeShipping: Yup.boolean(),
      }),
    }),
  );
