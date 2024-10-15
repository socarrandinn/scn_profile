import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const PAID_ORDER_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'paidOrder:errors.duplicatedName',
    description: 'paidOrder:errors.duplicatedNameDescription',
  }
};
