import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const COLLECTIONS_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'collections:errors.duplicatedName',
    description: 'collections:errors.duplicatedNameDescription',
  }
};
