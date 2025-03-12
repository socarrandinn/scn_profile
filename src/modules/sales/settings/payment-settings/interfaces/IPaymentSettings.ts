import { PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { CURRENCY_SYMBOL_ENUM, CURRENCY_TYPE_ENUM } from '../constants';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';

export interface ICurrencySettings {
  _id?: string;
  activeCurrencies: CURRENCY_TYPE_ENUM[];
  exchangeRate: IExchangeRate;
  primaryCurrency: CURRENCY_TYPE_ENUM;
}

export interface ICurrencyConfig {
  currency: CURRENCY_TYPE_ENUM;
  value: number;
}

export interface IExchangeRate {
  manualMode: boolean;
  rates: ICurrencyConfig[];
}

export interface IPaymentMethod {
  _id: string;
  methodType: PAYMENT_METHOD_ENUM;
  description: any;
  enabled: boolean;
  settings: IPaymentSettings;
}

export interface IPaymentSettings {
  minAmount: 0;
  maxAmount: 0;
  currency: CURRENCY_TYPE_ENUM[];
  tax: {
    type: PRICE_TYPE;
    value: 0;
  };
  gatewayConfig: {
    gateway: string;
    currency: CURRENCY_TYPE_ENUM;
    enabled: true;
  };
}
