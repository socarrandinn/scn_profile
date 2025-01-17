import { lazy } from 'react';

const loadUserDetails = () => import('modules/security/users/pages/UserDetails');
export const UserDetails = lazy(loadUserDetails);

const loadUserList = () => import('modules/security/users/pages/UserList');
export const UserList = lazy(loadUserList);

const loadUserListInvitation = () => import('modules/security/users/pages/UserListInvitation');
export const UserListInvitation = lazy(loadUserListInvitation);
