import { lazy } from 'react';

const loadUserProvidersListPage = () => import('modules/security/user-providers/pages/UserProvidersListPage');
export const UserProvidersListPage = lazy(loadUserProvidersListPage);

const loadUserProviderDetails = () => import('modules/security/user-providers/pages/UserProviderDetails');
export const UserProviderDetails = lazy(loadUserProviderDetails);
