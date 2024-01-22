import { productGeneralInfoSchema } from 'modules/inventory/product/schemas/product-general-info.schema';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import { productOrganizationSchema } from 'modules/inventory/product/schemas/product-organization.schema';

import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productSchema = productGeneralInfoSchema.concat(productPriceSchema).concat(productOrganizationSchema);

export const storeBasicSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
});

export const productSEOSchema = Yup.object().shape({
  seo: Yup.object().shape({
    name: Yup.string().max(255, 'max-255'),
    description: Yup.string().max(155, 'max-155'),
  }),
});
