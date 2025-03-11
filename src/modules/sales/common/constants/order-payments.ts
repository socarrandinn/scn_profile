import { currencyEnum } from 'settings/space';

export const CURRENCY_KEY = 'currency';

export enum PAYMENT_GATEWAYS_ENUM {
  TROPIPAY = 'tropipay',
  STRIPE = 'stripe',
  PAYPAL = 'paypal',
  ELAVON = 'elavon',
  BILL_POCKET = 'bill-pocket',
  REDSYS = 'redsys',
  DUCAPP = 'ducapp',
}

export enum PAYMENT_METHOD_ENUM {
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL',
  TROPIPAY = 'TROPIPAY',
  TROPIPAY_BALANCE = 'TROPIPAY_BALANCE',
  BANK_TRANSFER = 'BANK_TRANSFER',
  INTERNAL_WALLET = 'INTERNAL_WALLET',
  CASH_ON_PICK_UP = 'CASH_ON_PICK_UP',
}

export const activePayments = {
  [currencyEnum.CUP]: [PAYMENT_GATEWAYS_ENUM.DUCAPP],
  [currencyEnum.MLC]: [PAYMENT_GATEWAYS_ENUM.DUCAPP],
  [currencyEnum.USD]: [PAYMENT_GATEWAYS_ENUM.DUCAPP],
  [currencyEnum.EUR]: [PAYMENT_GATEWAYS_ENUM.DUCAPP],
  [currencyEnum.CAD]: [PAYMENT_GATEWAYS_ENUM.DUCAPP],
};

export const enabledPayments = new Set([PAYMENT_GATEWAYS_ENUM.DUCAPP]);
