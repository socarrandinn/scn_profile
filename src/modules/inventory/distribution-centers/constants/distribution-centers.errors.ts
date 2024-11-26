import { COMMON_ERRORS } from 'modules/common/constants/errors.references';
export enum ERRORS {
  DISTRIBUTION_CENTER_WAREHOUSE_ASSOCIATED = 'IDC001',
}
export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const DISTRIBUTION_CENTERS_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'distributionCenters:errors.duplicatedName',
    description: 'distributionCenters:errors.duplicatedNameDescription',
  },
};

export const DELETE_DISTRIBUTION_CENTER_ERRORS = {
  [ERRORS.DISTRIBUTION_CENTER_WAREHOUSE_ASSOCIATED]: {
    title: 'errors:generalError',
    description: 'errors:delete.DISTRIBUTION_CENTER_WAREHOUSE_ASSOCIATED',
  },
};
