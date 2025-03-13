import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const INCIDENCE_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'incidence:errors.duplicatedName',
    description: 'incidence:errors.duplicatedNameDescription',
  }
};
