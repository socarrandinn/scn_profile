import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchema, AddressInfoSchemaWithLocation, ContactInfoSchema } from 'modules/common/schemas';

export const supplierSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  // code: Yup.string().required('required'),
  // @ts-ignore
  address: AddressInfoSchemaWithLocation,
  contacts: ContactInfoSchema,
  commission: Yup.number().min(0.0).required().max(100.0),
});

export const supplierAddressSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  address: AddressInfoSchema,
});

export const supplierContactSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  contacts: ContactInfoSchema,
});

export const supplierBasicSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  commission: Yup.number().min(0.0).required().max(100.0).nullable().typeError(''),
});

export const supplierTagscSchema = Yup.object().shape({
  keywords: Yup.array().of(Yup.string()),
});
