import { ErrorType } from '@dfl/mui-react-common';

export const ERRORS = {
  NETWORK_ERROR: '00000',
  EXPIRED_TOKEN: 'PJ0012',
  UNIQUENESS: 'E11000',
  NOT_ALLOW: '0',
  PASSWORD_HISTORY: 'PJ0010',
};

export const GET_ONE_ERROR: ErrorType = {
  title: 'common:errors.notFound',
  description: 'common:errors.notFoundDescription',
  severity: 'warning',
};

export const mapGetOneErrors = (error: any): ErrorType | undefined => {
  if (error?.statusCode === 400 || error?.statusCode === 404) {
    return GET_ONE_ERROR;
  }
};
