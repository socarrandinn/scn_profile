import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const DISTRIBUTION_CENTERS_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'distributionCenters:errors.duplicatedName',
    description: 'distributionCenters:errors.duplicatedNameDescription',
  }
};
