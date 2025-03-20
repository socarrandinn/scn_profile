import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const DISALLOWED_WORD_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'disallowedWord:errors.duplicatedName',
    description: 'disallowedWord:errors.duplicatedNameDescription',
  },
};
