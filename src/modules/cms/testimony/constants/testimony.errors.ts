import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const TESTIMONY_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'testimony:errors.duplicatedName',
    description: 'testimony:errors.duplicatedNameDescription',
  }
};
