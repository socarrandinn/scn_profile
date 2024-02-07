import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchema, AddressInfoSchemaWithLocation, ContactInfoSchema } from 'modules/common/schemas';

export const logisticsSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  active: Yup.boolean().required(),
  address: AddressInfoSchemaWithLocation,
  contacts: ContactInfoSchema,
  handlingCost: Yup.number().min(0.0).required(),
});

export const logisticAddressSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  address: AddressInfoSchema,
});

export const logisticContactSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  contacts: ContactInfoSchema,
});

export const logisticBasicSchema = Yup.object().shape({
  _id: Yup.string().required('required'),
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  code: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  // commission: Yup.number().min(0.0).required().max(100.0).nullable().typeError(''),
  handlingCost: Yup.number().min(0.0).required().nullable().typeError(''),
});

export const logisticsBulkUpdateHandlingCost = Yup.object().shape({
  handlingCost: Yup.number().min(0.0).required(),
  logistics: Yup.array().required('required').min(1, 'logistics:errors.min-1'),
});

export const logisticUserScheme = Yup.object().shape({
  users: Yup.array().required('required'),
  role: Yup.object().required('required'),
  store: Yup.object(),
});
