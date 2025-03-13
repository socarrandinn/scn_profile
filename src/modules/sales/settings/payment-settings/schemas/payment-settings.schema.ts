import * as Yup from 'yup';
import '@dfl/yup-validations';
import { PAYMENT_GATEWAYS_ENUM, PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { CURRENCY_TYPE_ENUM } from '../constants';

export const paymentSettingsSchema = Yup.object().shape({
  minAmount: Yup.number().min(0, 'positiveNumber').typeError('invalidNumber'),
  maxAmount: Yup.number().min(0, 'positiveNumber').typeError('invalidNumber'),
  currency: Yup.array(),
  gatewayConfig: Yup.array(),
});

export const paymentMethodSchema = Yup.object().shape({
  methodType: Yup.string().required('required').oneOf(Object.values(PAYMENT_METHOD_ENUM)),
  enabled: Yup.boolean(),
  settings: paymentSettingsSchema,
});
