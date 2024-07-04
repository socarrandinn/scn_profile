import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const TAB_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'tab:errors.duplicatedName',
    description: 'tab:errors.duplicatedNameDescription',
  }
};
