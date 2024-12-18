import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const PRODUCT_FEATURE_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'productFeature:errors.duplicatedName',
    description: 'productFeature:errors.duplicatedNameDescription',
  }
};
