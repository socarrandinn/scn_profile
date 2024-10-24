import * as Yup from 'yup';
import '@dfl/yup-validations';
import { combinedPriceValueSchema } from 'modules/inventory/product/schemas/product-price.schema';

export const warehouseSupplierSchema = Yup.object().shape({
  warehouse: Yup.string().required('required'),
  supplier: Yup.string()
    .required('required')
    .transform((supp) => supp._id || supp),
  priceConfig: combinedPriceValueSchema,
});
