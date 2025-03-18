import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { CURRENCY_SYMBOL_ENUM, CURRENCY_TYPE_ENUM } from '../constants';
import { combinedPriceValueSchema } from 'modules/inventory/product/schemas/product-price.schema';

export const paymentSettingsSchema = Yup.object().shape({
  minAmount: Yup.number().min(0, 'positiveNumber').typeError('invalidValue-number'),
  maxAmount: Yup.number()
    .min(1, 'min-1-num')
    .typeError('invalidValue-number')
    .test('is-greater-than-min', 'maxAmountGreaterThanMinAmount', function (value) {
      const { minAmount } = this.parent;
      if (minAmount !== undefined && value !== undefined) {
        return value > minAmount;
      }
      return true;
    }),
  currency: Yup.array(),
  gatewayConfig: Yup.array(),
  tax: combinedPriceValueSchema,
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
  exchangeRate: Yup.number().required('required').typeError('invalidValue-number').min(0.01, 'min-001-num'),
});

export const currencySettingsSchema = Yup.object().shape({
  primary: Yup.string().required('required').oneOf(Object.values(CURRENCY_TYPE_ENUM)),
  currencies: Yup.array().of(currencyConfigSchema),
});
