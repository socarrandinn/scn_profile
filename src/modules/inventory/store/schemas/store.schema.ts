import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ContactInfoSchema, AddressInfoSchemaWithLocation } from 'modules/common/schemas';

export const storeSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  description: Yup.string().min(4, 'min-4'),
  visible: Yup.boolean().required('required'),
  logistic: Yup.string().required('required'),
  contacts: ContactInfoSchema,
  address: AddressInfoSchemaWithLocation,
});
