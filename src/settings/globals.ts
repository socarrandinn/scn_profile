import { PROVINCES } from '@dfl/location';
import { PAYMENT_GATEWAYS_ENUM } from 'modules/sales/common/constants/order-payments';
import { isTrue } from 'utils/isTrue';

export const ALLOWED_PROVINCES = PROVINCES.filter((p) => p.acronym.match(/ART|HAB|MAY/));

export const DOMAIN = process.env.REACT_APP_DOMAIN ?? 'domain.com';

export const enablePoints = isTrue(process.env.REACT_APP_OFFERS_PRODUCT_POINT || false);

export const enableRouter = process.env.REACT_APP_OFFERS_PRODUCT_DIAMONDS === 'true';

export const ALLOWED_PAYMENT_METHODS_DEFAULT = [
  PAYMENT_GATEWAYS_ENUM.BALANCE_DUC,
  PAYMENT_GATEWAYS_ENUM.BALANCE_TUAMBIA,
  PAYMENT_GATEWAYS_ENUM.BALANCE_TPP,
  PAYMENT_GATEWAYS_ENUM.CCSALE_DUC,
  PAYMENT_GATEWAYS_ENUM.CCSALE_ELA,
  PAYMENT_GATEWAYS_ENUM.CCSALE_TPP,
  PAYMENT_GATEWAYS_ENUM.CCSALE_XPAY,
];

export const ALLOWED_PAYMENT_METHODS: PAYMENT_GATEWAYS_ENUM[] =
  process.env.REACT_APP_ALLOWED_PAYMENT_METHODS?.split(',')?.map((e: string) => {
    return PAYMENT_GATEWAYS_ENUM?.[e.trim() as PAYMENT_GATEWAYS_ENUM];
  }) || ALLOWED_PAYMENT_METHODS_DEFAULT;
