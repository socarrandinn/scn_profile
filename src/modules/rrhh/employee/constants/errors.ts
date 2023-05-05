import { GET_ONE_ERROR } from 'constants/errors';
import { ErrorType } from '@dfl/mui-react-common';

export const ERRORS = {
  UNIQUENESS_PHONE: 'contacts.mainPhone',
  UNIQUENESS_CI: 'general.ci',
  UNIQUENESS_EMAIL: 'contacts.mainEmail',
};

export const EMPLOYEE_ERRORS = {
  [ERRORS.UNIQUENESS_PHONE]: {
    title: 'employee:errors.uniqueness',
    description: 'employee:errors.duplicatedMainPhoneDescription',
  },
  [ERRORS.UNIQUENESS_EMAIL]: {
    title: 'employee:errors.uniqueness',
    description: 'employee:errors.duplicatedMainEmailDescription',
  },
  [ERRORS.UNIQUENESS_CI]: {
    title: 'employee:errors.uniqueness',
    description: 'employee:errors.duplicatedCIDescription',
  },
};

export const mapGetOneErrors = (error: any): ErrorType | undefined => {
  if (error?.status === 404) {
    return GET_ONE_ERROR;
  }
  if (error?.status === 400) {
    if (error?.reference === 'E11000') {
      return error?.key?.map((key: string) => {
        if (EMPLOYEE_ERRORS[key]) return EMPLOYEE_ERRORS[key];
        return {
          title: error?.message,
          description: error?.message,
        };
      });
    }

    return {
      title: 'employee:errors.badRequest',
      description: 'employee:errors.badRequestDescription',
      severity: 'error',
    };
  }
};
