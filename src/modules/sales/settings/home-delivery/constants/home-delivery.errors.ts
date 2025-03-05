import { ERRORS } from 'constants/errors';

export const DELIVERY_PROVINCE_ERRORS = {
  [ERRORS.UNIQUENESS]: {
    description: 'errors:duplicatedProvince',
  },
};

export const DELIVERY_ERRORS = {
  [ERRORS.UNIQUENESS]: {
    description: 'errors:duplicatedCountry',
  },
};

export const DELIVERY_CITY_ERRORS = {
  [ERRORS.UNIQUENESS]: {
    description: 'errors:duplicatedCity',
  },
};
