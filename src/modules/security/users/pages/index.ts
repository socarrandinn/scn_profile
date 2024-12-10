import { lazy } from 'react';

const loadUserDetails = () => import('modules/security/users/pages/UserDetails');
export const UserDetails = lazy(loadUserDetails);

const loadUserList = () => import('modules/security/users/pages/UserListPage');
export const UserList = lazy(loadUserList);
