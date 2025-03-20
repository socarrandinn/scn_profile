import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const STOCK_REDUCTION_CAUSE_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'stockReductionCause:errors.duplicatedName',
    description: 'stockReductionCause:errors.duplicatedNameDescription',
  },
};
