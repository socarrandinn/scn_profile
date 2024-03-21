import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ImagesScheme } from 'modules/common/schemas';
import { productGeneralInfoSchema } from 'modules/inventory/product/schemas/product-general-info.schema';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import { productOrganizationSchema } from 'modules/inventory/product/schemas/product-organization.schema';

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

export const productEstimatedTimeSchema = Yup.object().shape({
  shippingSettings: Yup.object().shape({
    freeShipping: Yup.boolean(),
    estimatedTime: Yup.object().shape({
      from: Yup.number().min(0, 'positiveNumber'),
      to: Yup.number().min(0, 'positiveNumber'),
    }),
  }),
});

export const productSchema = productGeneralInfoSchema
  .concat(productPriceSchema)
  .concat(productOrganizationSchema)
  .concat(productEstimatedTimeSchema);
