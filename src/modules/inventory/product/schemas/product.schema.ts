import { productGeneralInfoSchema } from 'modules/inventory/product/schemas/product-general-info.schema';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import { productOrganizationSchema } from 'modules/inventory/product/schemas/product-organization.schema';

import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productSchema = productGeneralInfoSchema.concat(productPriceSchema).concat(productOrganizationSchema);

export const productBasicSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2'),
  description: Yup.string().required('required').min(2, 'min-2'),
  brand: Yup.string().required('required').min(2, 'min-2'),
  code: Yup.string().required('required').min(2, 'min-2'),
});

export const ProductScoreSchema = Yup.object().shape({
  score: Yup.number().min(0),
});

export const productSEOSchema = Yup.object().shape({
  seo: Yup.object().shape({
    name: Yup.string().max(255, 'max-255'),
    description: Yup.string().max(155, 'max-155'),
    slugUrl: Yup.string().max(155, 'max-155'),
    canocicURL: Yup.string().max(155, 'max-155'),
  }),
});
