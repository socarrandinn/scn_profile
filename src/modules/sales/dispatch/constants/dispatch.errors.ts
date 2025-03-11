import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const DISPATCH_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'dispatch:errors.duplicatedName',
    description: 'dispatch:errors.duplicatedNameDescription',
  }
};
