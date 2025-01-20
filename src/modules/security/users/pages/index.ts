import { lazy } from 'react';

const loadUserListInvitation = () => import('modules/security/users/pages/UserListInvitation');
export const UserListInvitation = lazy(loadUserListInvitation);

const loadUserDetails = () => import('modules/security/users/pages/UserDetails');
export const UserDetails = lazy(loadUserDetails);
