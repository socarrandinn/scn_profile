import * as Yup from 'yup';
import '@dfl/yup-validations';

export const clientBasicSchema = Yup.object().shape({
  firstName: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  lastName: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
});

export const clientContactSchema = Yup.object().shape({
  email: Yup.string().required('required').trim().email('validEmail').max(255),
  // @ts-ignore
  phone: Yup.string().phone('validPhone'),
});

export const clientsSchema = clientBasicSchema.concat(clientContactSchema);
