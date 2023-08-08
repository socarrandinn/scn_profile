import { GET_ONE_ERROR } from 'constants/errors';

export const ERRORS = {
  UNIQUENESS_PHONE: 'contacts.mainPhone',
  UNIQUENESS_CI: 'general.ci',
  UNIQUENESS_EMAIL: 'contacts.mainEmail',
};

export const PRODUCT_ERRORS = {
  [ERRORS.UNIQUENESS_PHONE]: {
    title: 'product:errors.uniqueness',
    description: 'product:errors.duplicatedMainPhoneDescription',
  },
  [ERRORS.UNIQUENESS_EMAIL]: {
    title: 'product:errors.uniqueness',
    description: 'product:errors.duplicatedMainEmailDescription',
  },
  [ERRORS.UNIQUENESS_CI]: {
    title: 'product:errors.uniqueness',
    description: 'product:errors.duplicatedCIDescription',
  },
};

export const mapGetOneErrors = (error: any): any => {
  if (error?.status === 404) {
    return GET_ONE_ERROR;
  }
  if (error?.status === 400) {
    if (error?.reference === 'E11000') {
      return error?.key?.map((key: string) => {
        if (PRODUCT_ERRORS[key]) return PRODUCT_ERRORS[key];
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
