import { COMMON_ERRORS } from 'modules/common/constants/errors.references';

export const ERROR_REFS = {
  ...COMMON_ERRORS,
  // add new error refs here
};

export const USERS_INVITE_ERRORS = {
  [ERROR_REFS.DUPLICATE_KEY]: {
    title: 'usersInvite:errors.duplicatedName',
    description: 'usersInvite:errors.duplicatedNameDescription',
  }
};
