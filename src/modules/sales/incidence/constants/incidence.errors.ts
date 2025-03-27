import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  REQUIRED_SUB_CAUSE: 'IRC0003',
  // add new error refs here
};

export const INCIDENCE_ERRORS = {
  [ERROR_REFS.REQUIRED_SUB_CAUSE]: {
    description: 'errors:requiredSubCause',
  },
};
