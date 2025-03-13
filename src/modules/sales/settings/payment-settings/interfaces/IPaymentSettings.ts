import { PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { CURRENCY_SYMBOL_ENUM, CURRENCY_TYPE_ENUM } from '../constants';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';

export interface ICurrencySettings {
  currencies: ICurrencyConfig[];
  primary: CURRENCY_TYPE_ENUM;
}

export interface ICurrencyConfig {
  _id?: string;
  currency: CURRENCY_TYPE_ENUM;
  symbol: CURRENCY_SYMBOL_ENUM;
  enabled: boolean;
  isPrimary: boolean;
  exchangeRate: number;
  name: string;
  updatedAt: Date;
  isCustomRate: any;
}

export interface IPaymentMethod {
  _id?: string;
  methodType: PAYMENT_METHOD_ENUM;
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
  gatewayConfig: IGatewayConfig[];
}

export interface IGatewayConfig {
  gateway: string;
  currency: CURRENCY_TYPE_ENUM[];
  enabled: boolean;
}
