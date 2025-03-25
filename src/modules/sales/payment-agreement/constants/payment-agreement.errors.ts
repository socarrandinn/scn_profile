import { ErrorType } from '@dfl/mui-react-common';
import { GET_ONE_ERROR } from 'constants/errors';

export const ERRORS = {
  INVALID_PAYMENT_AGREEMENT: 'ID0001',
};

export const PAYMENT_AGREEMENT_ERRORS = {
  [ERRORS.INVALID_PAYMENT_AGREEMENT]: {
    title: 'errors:title',
    description: 'paymentAgreement:errors.INVALID_PAYMENT_AGREEMENT',
  },
};

export const mapGetOneErrors = (error: any): ErrorType | undefined => {
  if (error?.statusCode === 400 || error?.statusCode === 404) return GET_ONE_ERROR;
};
