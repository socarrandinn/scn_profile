import * as Yup from 'yup';
import '@dfl/yup-validations';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('validEmail').max(255, 'max-255').required('El usuario es requerido'),
  // @ts-ignore
  password: Yup.string().password().required('La contraseña es requerida'),
});
