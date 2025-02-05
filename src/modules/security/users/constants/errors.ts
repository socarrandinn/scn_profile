export const USER_ERROR = {
  DUPLICATED_USER: 'e-line-validation-085',
  INVITATION_ALREADY_EXISTS: 'INVITATION_ALREADY_EXISTS',
};

export const USERS_ERRORS = {
  [USER_ERROR.DUPLICATED_USER]: {
    description: 'users:errors.duplicatedUser',
  },
  [USER_ERROR.INVITATION_ALREADY_EXISTS]: {
    description: 'usersInvite:userAlreadyInvited',
  },
};
