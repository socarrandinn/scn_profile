import * as Yup from 'yup';
import '@dfl/yup-validations';
import { AddressInfoSchemaWithLocation } from 'modules/common/schemas';

export const shippingSchema = Yup.object().shape({
  person: Yup.object().shape({
    firstName: Yup.string().min(2, 'min-2').max(50, 'max-50').required('required'),
    lastName: Yup.string().min(2, 'min-2').max(50, 'max-50').required('required'),
    email: Yup.string().email('validEmail').required('required').max(255),
    // @ts-ignore
    phone: Yup.string().phone('invalidPhone').required('required'),
    // @ts-ignore
    identityNumber: Yup.string().trim().cubaCi('invalidCi'),
  }),
  address: AddressInfoSchemaWithLocation,
});
