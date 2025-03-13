import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PAYMENT_GATEWAYS_ENUM, PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { CURRENCY_RATE_MODE, CURRENCY_SYMBOL_ENUM, CURRENCY_TYPE_ENUM } from '../constants';

export const paymentSettingsSchema = Yup.object().shape({
  minAmount: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
  maxAmount: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
  currency: Yup.array(),
  gatewayConfig: Yup.array(),
});

export const paymentMethodSchema = Yup.object().shape({
  methodType: Yup.string().required('required').oneOf(Object.values(PAYMENT_METHOD_ENUM)),
  enabled: Yup.boolean(),
  settings: paymentSettingsSchema,
});

export const currencyConfigSchema = Yup.object().shape({
  currency: Yup.string().required('required').oneOf(Object.values(CURRENCY_TYPE_ENUM)),
  symbol: Yup.string().required('required').oneOf(Object.values(CURRENCY_SYMBOL_ENUM)),
  enabled: Yup.boolean().required('required'),
  isPrimary: Yup.boolean().required('required'),
  exchangeRate: Yup.number().required('required').typeError('invalidValue-number').min(0.0001, 'min-0001-num'),
});

export const currencySettingsSchema = Yup.object().shape({
  primary: Yup.string().required('required').oneOf(Object.values(CURRENCY_TYPE_ENUM)),
  currencies: Yup.array().of(currencyConfigSchema),
});
