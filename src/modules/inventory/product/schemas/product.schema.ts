import { productGeneralInfoSchema } from 'modules/inventory/product/schemas/product-general-info.schema';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import { productOrganizationSchema } from 'modules/inventory/product/schemas/product-organization.schema';

import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productSchema = productGeneralInfoSchema.concat(productPriceSchema).concat(productOrganizationSchema);

export const ProductScoreSchema = Yup.object().shape({
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
