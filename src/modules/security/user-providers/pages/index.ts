import { lazy } from 'react';

const loadUserProvidersListPage = () => import('modules/security/user-providers/pages/UserProvidersListPage');
export const UserProvidersListPage = lazy(loadUserProvidersListPage);
