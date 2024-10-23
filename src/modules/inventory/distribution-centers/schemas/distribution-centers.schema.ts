import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchemaWithLocation, ContactInfoSchema } from 'modules/common/schemas';
const logistic = Yup.string().required('required');
const description = Yup.string().min(4, 'min-4').max(255, 'max-255');

export const distributionCentersSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description,
  visible: Yup.boolean().required('required'),
  logistic,
  locations: Yup.array().required('warehouse:deliveryRequired').min(1, 'warehouse:deliveryRequired'),
  contacts: ContactInfoSchema,
  address: AddressInfoSchemaWithLocation,
});

export const warehouseLocationsSchema = Yup.object().shape({
  locations: Yup.array().required('warehouse:deliveryRequired').min(1, 'warehouse:deliveryRequired'),
});
