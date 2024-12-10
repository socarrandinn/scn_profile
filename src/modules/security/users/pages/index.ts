import { lazy } from 'react';

const loadUserDetails = () => import('modules/security/users/pages/UserDetails');
export const UserDetails = lazy(loadUserDetails);

const loadUserList = () => import('modules/security/users/pages/UserListPage');
export const UserList = lazy(loadUserList);

const loadUserProviderDetails = () => import('modules/security/users/pages/UserProviderDetails');
export const UserProviderDetails = lazy(loadUserProviderDetails);

const loadOnBoardingCompleted = () => import('modules/security/users/pages/OnBoardingCompleted');
export const OnBoardingCompleted = lazy(loadOnBoardingCompleted);

const loadChangePasswordRequire = () => import('modules/security/users/pages/ChangePasswordRequire');
export const ChangePasswordRequire = lazy(loadChangePasswordRequire);
