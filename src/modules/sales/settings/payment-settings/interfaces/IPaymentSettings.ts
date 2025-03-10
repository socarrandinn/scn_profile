import { CURRENCY_SYMBOL_ENUM, CURRENCY_TYPE_ENUM } from '../constants';

export interface IPaymentSettings {
  _id?: string;
  name: string | CURRENCY_TYPE_ENUM;
  description: string;
  symbol: string | CURRENCY_SYMBOL_ENUM;
  enabled: boolean;
  isPrimary: boolean;
  manualMode: boolean;
  exchangeRate: number;
}
