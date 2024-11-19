import * as Yup from 'yup';
import '@dfl/yup-validations';
import { combinedPriceValueSchema } from 'modules/inventory/product/schemas/product-price.schema';

export const warehouseSupplierSchema = Yup.object().shape({
  warehouse: Yup.string()
    .required('required')
    .transform((warehouse) => warehouse?.warehouseId || warehouse?._id || warehouse),
  supplier: Yup.string()
    .required('required')
    .transform((supp) => supp.supplierId || supp._id || supp),
  priceConfig: combinedPriceValueSchema,
});
