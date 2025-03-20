import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const BANK_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'bank:errors.duplicatedName',
    description: 'bank:errors.duplicatedNameDescription',
  }
};
