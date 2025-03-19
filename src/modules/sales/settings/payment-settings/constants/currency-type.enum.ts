export enum CURRENCY_TYPE_ENUM {
  USD = 'USD',
  EUR = 'EUR',
  CAD = 'CAD',
  MXN = 'MXN',
}

export const LIST_CURRENCIES = Object.values(CURRENCY_TYPE_ENUM);

export enum CURRENCY_SYMBOL_ENUM {
  USD = '$',
  EUR = '€',
  CAD = 'C$',
  MXN = 'MXN$',
}

export enum CURRENCY_RATE_MODE {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
}
