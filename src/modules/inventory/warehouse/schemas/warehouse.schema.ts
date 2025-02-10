import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ContactInfoSchema, AddressInfoSchemaWithLocation } from 'modules/common/schemas';

const logistic = Yup.string().required('required');
const description = Yup.string().min(4, 'min-4').max(255, 'max-255');

export const warehouseSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description,
  logistic,
  address: AddressInfoSchemaWithLocation,
  visible: Yup.boolean().required('required'),
  contacts: ContactInfoSchema,
  // locations: Yup.array().required('warehouse:deliveryRequired').min(1, 'warehouse:deliveryRequired'),
});

export const warehouseBasicSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description,
});

export const warehouseAddressSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  address: AddressInfoSchemaWithLocation,
});
export const warehouseProviderSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  logistic,
});

export const warehouseContactSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  contacts: ContactInfoSchema,
});
export const warehouseLocationsSchema = Yup.object().shape({
  locations: Yup.array().required('warehouse:deliveryRequired').min(1, 'warehouse:deliveryRequired'),
});
