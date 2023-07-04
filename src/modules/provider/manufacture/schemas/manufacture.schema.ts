import * as Yup from 'yup';
import '@dfl/yup-validations';
import { ManufactureState } from '../constants/ManufactureState';

export const manufactureSchema = Yup.object().shape({
  name: Yup.string().required('required').min(4, 'min-4').max(255, 'max-255'),
  avatar: Yup.string().url().nullable(),
  state: Yup.mixed<ManufactureState>().oneOf(Object.values(ManufactureState)),
  brand: Yup.array(),
});
