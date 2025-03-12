import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PAYMENT_GATEWAYS_ENUM, PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { CURRENCY_TYPE_ENUM } from '../constants';

export const paymentSettingsSchema = Yup.object().shape({
  minAmount: Yup.number().min(0, 'positiveNumber').typeError('invalidNumber'),
  maxAmount: Yup.number().min(0, 'positiveNumber').typeError('invalidNumber'),
  currency: Yup.array(),
  gatewayConfig: Yup.object()
    .shape({
      gateway: Yup.string().oneOf(Object.values(PAYMENT_GATEWAYS_ENUM)),
      currency: Yup.string().oneOf(Object.values(CURRENCY_TYPE_ENUM)),
      enabled: Yup.boolean(),
    })
    .strip(),
});

export const paymentMethodSchema = Yup.object().shape({
  methodType: Yup.string().required('required').oneOf(Object.values(PAYMENT_METHOD_ENUM)),
  enabled: Yup.boolean(),
  settings: paymentSettingsSchema,
});
