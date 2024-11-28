import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ImagesScheme } from 'modules/common/schemas';
import { productGeneralInfoSchema } from 'modules/inventory/product/schemas/product-general-info.schema';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import { productProviderSchema } from 'modules/inventory/product/schemas/product-organization.schema';
import { TAG_TYPE_ENUM } from 'modules/inventory/settings/tags/interfaces';
import { isArray, isEmpty } from 'lodash';

export const productScoreSchema = Yup.object().shape({
  score: Yup.number().min(0),
});
export const productRelatedSchema = Yup.object().shape({
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
  }),

  // extras
  province: Yup.string().nullable(),
  municipality: Yup.string().nullable(),
});

export const TagsSchema = Yup.array().of(
  Yup.object().shape({
    _id: Yup.string(),
    type: Yup.string().oneOf(Object.keys(TAG_TYPE_ENUM)),
    value: Yup.mixed()
      .when(['type'], {
        is: (type: TAG_TYPE_ENUM) => [TAG_TYPE_ENUM.ARRAY].includes(type),
        then: (schema) =>
          schema.default([]).test('check-array', 'tags:errors:array:min-1', function (value) {
            if (isArray(value)) {
              return value.length > 0;
            }
            return true;
          }),
      })
      .when(['type'], {
        is: TAG_TYPE_ENUM.BOOLEAN,
        then: (schema) => schema.default(false),
      })
      .when(['type'], {
        is: TAG_TYPE_ENUM.DATE,
        then: (schema) => schema.default(new Date()),
      })
      .when(['type'], {
        is: (type: TAG_TYPE_ENUM) => [TAG_TYPE_ENUM.NUMBER, TAG_TYPE_ENUM.STRING].includes(type),
        then: (schema) =>
          schema.test('test-required', 'required', function (value) {
            if (isEmpty(value)) {
              return false;
            }
            return true;
          }),
      }),
    name: Yup.string(),
  }),
);

export const productTagsSchema = Yup.object().shape({
  tags: Yup.object().shape({
    product: TagsSchema,
    supplier: Yup.array(),
  }),
  otherTags: TagsSchema,
  selectedTag: Yup.array(),
});

export const productSchema = productGeneralInfoSchema
  .concat(productPriceSchema)
  .concat(productProviderSchema)
  .concat(productRulesSchema)
  .concat(productTagsSchema)
  .concat(
    Yup.object().shape({
      shippingSettings: Yup.object().shape({
        shippingInfo: Yup.object().shape({
          weight: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
          height: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
          length: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
          width: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
          fragile: Yup.boolean().default(false),
          needRefrigeration: Yup.boolean().default(false),
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
