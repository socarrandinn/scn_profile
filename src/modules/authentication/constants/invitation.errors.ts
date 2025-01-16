export const ERRORS = {
  INVALID_LINK: 'E13003',
  LOCK_ACCOUNT: 'BJA000',
  UNAUTHORIZED_MULTI_SPACE: 'PJ0004',
};

export const INVITATION_ERRORS = {
  [ERRORS.INVALID_LINK]: {
    title: 'usersInvite:acceptance.errorCheckTitle',
    reference: 'E13003',
    description: 'usersInvite:acceptance.errorCheckSubtext',
  },
  [ERRORS.LOCK_ACCOUNT]: {
    title: 'usersInvite:acceptance.errorLockTitle',
    reference: 'BJA000',
    description: 'usersInvite:acceptance.errorLockSubtext',
  },
  [ERRORS.UNAUTHORIZED_MULTI_SPACE]: {
    title: 'usersInvite:acceptance.errorSpaceTitle',
    reference: 'PJ0004',
    description: 'usersInvite:acceptance.errorSpaceSubtext',
  },
};
