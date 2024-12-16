import { COMMON_ERRORS } from 'modules/common/constants';

export const ERRORS = {
  ...COMMON_ERRORS,
  EXPORT_STATUS_ERROR: 'ERROR',
};

export const EXPORT_EXCEL_ERRORS = {
  [ERRORS.EXPORT_STATUS_ERROR]: {
    title: 'product:errors.duplicatedCodeTitle',
    description: 'product:errors.duplicatedCodeDescription',
  },
};
