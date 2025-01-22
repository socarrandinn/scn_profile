import { lazy } from 'react';

const loadUserListInvitation = () => import('modules/security/users/pages/UserListInvitation');
export const UserListInvitation = lazy(loadUserListInvitation);
