import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const BANNER_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'banner:errors.duplicatedName',
    description: 'banner:errors.duplicatedNameDescription',
  }
};
