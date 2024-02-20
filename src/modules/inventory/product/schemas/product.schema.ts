import { productGeneralInfoSchema } from 'modules/inventory/product/schemas/product-general-info.schema';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import { productOrganizationSchema } from 'modules/inventory/product/schemas/product-organization.schema';

import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ImagesScheme } from 'modules/common/schemas';

export const productSchema = productGeneralInfoSchema.concat(productPriceSchema).concat(productOrganizationSchema);

export const productScoreSchema = Yup.object().shape({
  score: Yup.number().min(0),
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

export const productScoreEstimatedTimeSchema = Yup.object().shape({
  shippingSettings: Yup.object().shape({
    freeShipping: Yup.boolean(),
    estimatedTime: Yup.object().shape({
      from: Yup.number().min(0),
      to: Yup.number().min(0),
    }),
  }),
});

export const productPerUnitschema = Yup.object().shape({
  productPerUnit: Yup.object().shape({
    amount: Yup.string().min(2, 'min-2').max(255, 'max-255'),
    measurements: Yup.string().min(2, 'min-2').max(255, 'max-255'),
  }),
});

export const productCodeProviderSchema = Yup.object().shape({
  codeProductProvider: Yup.string().min(2, 'min-2'),
  codeLogisticProvider: Yup.string().min(2, 'min-2'),
});
