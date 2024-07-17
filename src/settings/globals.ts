import { PROVINCES } from '@dfl/location';
import { isTrue } from 'utils/isTrue';

export const ALLOWED_PROVINCES = PROVINCES.filter((p) => p.acronym.match(/ART|HAB|MAY/));

export const DOMAIN = process.env.REACT_APP_DOMAIN ?? 'domain.com';

export const enablePoints = isTrue(process.env.REACT_APP_OFFERS_PRODUCT_POINT || false);

export const enableRouter = process.env.REACT_APP_OFFERS_PRODUCT_DIAMONDS === 'true';
