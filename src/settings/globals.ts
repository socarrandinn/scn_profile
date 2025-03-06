import { PROVINCES } from '@dfl/location';
import { PAYMENT_GATEWAYS_ENUM } from 'modules/sales/common/constants/order-payments';
import { isTrue } from 'utils/isTrue';

export const ALLOWED_PROVINCES = PROVINCES.filter((p) => p.acronym.match(/ART|HAB|MAY/));

export const DOMAIN = process.env.REACT_APP_DOMAIN ?? 'domain.com';

export const enablePoints = isTrue(process.env.REACT_APP_OFFERS_PRODUCT_POINT || false);

export const enableRouter = process.env.REACT_APP_OFFERS_PRODUCT_DIAMONDS === 'true';

export const ALLOWED_PAYMENT_METHODS_DEFAULT = Object.values(PAYMENT_GATEWAYS_ENUM);

export const TRANSLATION_KEY = process.env.REACT_APP_LANG_KEY || 'data-lng';
