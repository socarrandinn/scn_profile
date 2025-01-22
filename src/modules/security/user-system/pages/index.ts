import { lazy } from 'react';

const loadUserSystemListPage = () => import('modules/security/user-system/pages/UserSystemListPage');
export const UserSystemListPage = lazy(loadUserSystemListPage);

const loadUserSystemDetails = () => import('modules/security/user-system/pages/UserSystemDetails');
export const UserSystemDetails = lazy(loadUserSystemDetails);
