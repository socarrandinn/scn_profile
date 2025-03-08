import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const PAYMENT_SETTINGS_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'paymentSettings:errors.duplicatedName',
    description: 'paymentSettings:errors.duplicatedNameDescription',
  }
};
