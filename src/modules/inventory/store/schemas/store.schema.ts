import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ContactInfoSchema, AddressInfoSchemaWithLocation, AddressInfoSchema } from 'modules/common/schemas';

export const storeSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().min(4, 'min-4'),
  visible: Yup.boolean().required('required'),
  logistic: Yup.string().required('required'),
  locations: Yup.array().required('store:deliveryRequired').min(1, 'store:deliveryRequired'),
  contacts: ContactInfoSchema,
  address: AddressInfoSchemaWithLocation,
});

export const storeBasicSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
});

export const storeAddressSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  address: AddressInfoSchema,
});

export const storeContactSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  contacts: ContactInfoSchema,
});
