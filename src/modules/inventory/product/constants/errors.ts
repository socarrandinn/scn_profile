import { GET_ONE_ERROR } from 'constants/errors';

export const ERRORS = {
  UNIQUENESS_CODE: 'code',
};

export const PRODUCT_ERRORS = {
  [ERRORS.UNIQUENESS_CODE]: {
    title: 'product:errors.duplicatedCodeTitle',
    description: 'product:errors.duplicatedCodeDescription',
  },
};

export const mapGetOneErrors = (error: any): any => {
  if (error?.status === 404) {
    return GET_ONE_ERROR;
  }
  if (error?.status === 400) {
    if (error?.reference === 'E11000') {
      return error?.key?.map((key: string) => {
        if (PRODUCT_ERRORS[key]) {
          return PRODUCT_ERRORS[key];
        }
        return {
          title: error?.message,
          description: error?.message,
        };
      });
    }

    return {
      title: 'product:errors.badRequest',
      description: 'product:errors.badRequestDescription',
      severity: 'error',
    };
  }
};
