import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchemaWithLocation, ContactInfoSchema } from 'modules/common/schemas';

export const supplierSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  // code: Yup.string().required('required'),
  // @ts-ignore
  address: AddressInfoSchemaWithLocation,
  contacts: ContactInfoSchema,
  commission: Yup.number().min(0.0).required().max(100.0)
});
