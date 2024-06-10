import { lazy } from 'react';

const loadUserDetails = () => import('modules/security/users/pages/UserDetails');
export const UserDetails = lazy(loadUserDetails);

const loadUserList = () => import('modules/security/users/pages/UserList');
export const UserList = lazy(loadUserList);

const loadUserProviderList = () => import('modules/security/users/pages/UserProviderList');
export const UserProviderList = lazy(loadUserProviderList);

const loadUserProviderDetails = () => import('modules/security/users/pages/UserProviderDetails');
export const UserProviderDetails = lazy(loadUserProviderDetails);

const loadOnBoardingCompleted = () => import('modules/security/users/pages/OnBoardingCompleted');
export const OnBoardingCompleted = lazy(loadOnBoardingCompleted);

const loadChangePasswordRequire = () => import('modules/security/users/pages/ChangePasswordRequire');
export const ChangePasswordRequire = lazy(loadChangePasswordRequire);

const loadUserTabList = () => import('modules/security/users/pages/UserTabList');
export const UserTabList = lazy(loadUserTabList);
