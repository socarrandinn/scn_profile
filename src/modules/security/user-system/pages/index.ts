import { lazy } from 'react';

const loadUserSystemListPage = () => import('modules/security/user-system/pages/UserSystemListPage');
export const UserSystemListPage = lazy(loadUserSystemListPage);
