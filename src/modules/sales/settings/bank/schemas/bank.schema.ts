import * as Yup from 'yup';
import '@dfl/yup-validations';
import { LIST_CURRENCIES } from '../../payment-settings/constants';

export const bankSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  description: Yup.string().max(255, 'max-255'),
  currency: Yup.string().required('required').oneOf(LIST_CURRENCIES),
  accountNumberIban: Yup.string(),
  country: Yup.string(),
  state: Yup.string(),
  municipality: Yup.string(),
  alias: Yup.string(),
  swiftCode: Yup.string(),
  codeBIC: Yup.string(),
  titular: Yup.string(),
  branch: Yup.string(),
});
