import * as Yup from 'yup';
import '@dfl/yup-validations';
import { LIST_CURRENCIES } from '../../payment-settings/constants';
import { isValidIBAN } from 'ibantools';

export const swiftRegex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

Yup.addMethod(Yup.string, 'iban', function (message) {
  return this.test('iban', message || 'incorrectCode', function (value) {
    if (!value) return true; // Si el campo es opcional y está vacío, no validar
    return isValidIBAN(value);
  });
});

export const bankSchema = Yup.object().shape({
  name: Yup.string().required('required').min(2, 'min-2').max(255, 'max-255'),
  description: Yup.string().max(255, 'max-255'),
  currency: Yup.string().required('required').oneOf(LIST_CURRENCIES),
  accountNumberIban: Yup.string(),
  alias: Yup.string(),
  swiftBIC: Yup.string().matches(swiftRegex, 'incorrectCode').required('required'),
  branchHolder: Yup.string(),
  branch: Yup.string(),
  address: Yup.object()
    .shape({
      country: Yup.string()?.transform((c) => c?.code || c),
      state: Yup.string(),
      city: Yup.string(),
    })
    .strip(),
  // @ts-ignore
  ibanNumber: Yup.string().required('required').iban('incorrectCode'),
});
