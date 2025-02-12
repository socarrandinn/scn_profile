import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const CONCILIATION_ADJUSTMENT_CAUSES_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'conciliationAdjustmentCauses:errors.duplicatedName',
    description: 'conciliationAdjustmentCauses:errors.duplicatedNameDescription',
  }
};
