import * as Yup from 'yup';
import '@dfl/yup-validations';

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
  address: Yup.object().shape({
    address: Yup.string().min(2, 'min-2').max(255, 'max-255'),
    state: Yup.string(),
    municipality: Yup.string(),
    country: Yup.string(),
  }),
});
