import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const PAGE_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'page:errors.duplicatedName',
    description: 'page:errors.duplicatedNameDescription',
  }
};
