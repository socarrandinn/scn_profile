import { ErrorType } from '@dfl/mui-react-common';
import { GET_ONE_ERROR } from 'constants/errors';

export const ERRORS = {
  MISSING_DISPATCH: 'd01',
  EMPTY_DISPATCH: 'd02',
  ORDER_DIFF_STATUS: 'ds5',
  ORDER_END_STATUS: 'ds7',
  ORDER_IN_DISPATCH: 'd03',
  ORDER_IN_DISPATCH_UPDATE: 'd003',
  MISSING_PROVIDER: 'dc002',
  MISSING_DISPATCH_UPDATE: 'd04',

  // reimbursement
  INVALID_RETURN_AT_ITEM: '1000',
  RETURN_GREATER_THAN_SPECIFY_STOCK: '1003',
  AMOUNT_RETURNED_NOT_EQUAL: '1004',
  ADD_ITEM_WANT_TO_EXCHANGE: '1005',
  INSUFFICIENT_PRODUCT_IN_STOCK: '1006',
  ICIDENCE_DIF_STATUS: 'd06',
};

export const DISPATCH_ERRORS = {
  [ERRORS.MISSING_DISPATCH]: {
    title: 'dispatch:errors.missing',
    description: 'dispatch:errors.missingDescription',
  },
  [ERRORS.MISSING_DISPATCH_UPDATE]: {
    title: 'dispatch:errors.missingUpdate',
    description: 'dispatch:errors.missingDescription',
  },
  [ERRORS.EMPTY_DISPATCH]: {
    title: 'dispatch:errors.empty',
    description: 'dispatch:errors.emptyDescription',
  },
  [ERRORS.ORDER_DIFF_STATUS]: {
    title: 'order:errors.empty',
    description: 'order:mustBeOnSameStatus',
  },
  [ERRORS.ORDER_IN_DISPATCH]: {
    title: 'dispatch:errors.alreadyDispatch',
    description: 'dispatch:errors.alreadyDispatchDescription',
  },
  [ERRORS.ORDER_IN_DISPATCH_UPDATE]: {
    title: 'dispatch:errors.alreadyDispatchUpdate',
    description: 'dispatch:errors.alreadyDispatchDescription',
  },
  [ERRORS.MISSING_PROVIDER]: {
    title: 'dispatch:errors.missingProvider',
    description: 'dispatch:errors.alreadymissingProvider',
  },
};

export const ORDER_ERRORS = {
  [ERRORS.ORDER_DIFF_STATUS]: {
    title: 'order:errors.status',
    description: 'order:mustBeOnSameStatus',
  },
  [ERRORS.ORDER_END_STATUS]: {
    title: 'order:errors.status',
    description: 'order:errors.status',
  },
};

export const ORDER_VALIDATE_INCIDENCE = {
  [ERRORS.ICIDENCE_DIF_STATUS]: {
    title: 'order:errors.status',
    description: 'incidence:changeStatus.mustBeOnSameStatus',
  },
};

// errors reimbursement
export const REIMBURSEMENT_ERRORS = {
  [ERRORS.INVALID_RETURN_AT_ITEM]: {
    title: 'reimbursement:errors.title',
    description: 'reimbursement:errors.INVALID_RETURN_AT_ITEM',
  },
  [ERRORS.RETURN_GREATER_THAN_SPECIFY_STOCK]: {
    title: 'reimbursement:errors.title',
    description: 'reimbursement:errors.RETURN_GREATER_THAN_SPECIFY_STOCK',
  },
  [ERRORS.AMOUNT_RETURNED_NOT_EQUAL]: {
    title: 'reimbursement:errors.title',
    description: 'reimbursement:errors.AMOUNT_RETURNED_NOT_EQUAL',
  },
  [ERRORS.ADD_ITEM_WANT_TO_EXCHANGE]: {
    title: 'reimbursement:errors.title',
    description: 'reimbursement:errors.ADD_ITEM_WANT_TO_EXCHANGE',
  },
  [ERRORS.INSUFFICIENT_PRODUCT_IN_STOCK]: {
    title: 'reimbursement:errors.title',
    description: 'reimbursement:errors.INSUFFICIENT_PRODUCT_IN_STOCK',
  },
};

export const mapGetOneErrors = (error: any): ErrorType | undefined => {
  if (error?.statusCode === 400 || error?.statusCode === 404) return GET_ONE_ERROR;
};
