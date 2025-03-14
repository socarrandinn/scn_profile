import { ErrorType } from '@dfl/mui-react-common';
import { GET_ONE_ERROR } from 'constants/errors';

export const ERRORS = {
  INVALID_DISPATCH: 'ID0001',
};

export const DISPATCH_ERRORS = {
  [ERRORS.INVALID_DISPATCH]: {
    title: 'errors:title',
    description: 'dispatch:errors.INVALID_DISPATCH',
  },
};

export const mapGetOneErrors = (error: any): ErrorType | undefined => {
  if (error?.statusCode === 400 || error?.statusCode === 404) return GET_ONE_ERROR;
};
