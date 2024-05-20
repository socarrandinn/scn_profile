import { PROVINCES } from '@dfl/location';

export const ALLOWED_PROVINCES = PROVINCES.filter((p) => p.acronym.match(/ART|HAB|MAY/));

export const DOMAIN = process.env.REACT_APP_DOMAIN ?? 'domain.com';
