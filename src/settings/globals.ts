import { PROVINCES } from '@dfl/location';

export const ALLOWED_PROVINCES = PROVINCES.filter((p) => p.acronym.match(/ART|HAB|MAY/));
