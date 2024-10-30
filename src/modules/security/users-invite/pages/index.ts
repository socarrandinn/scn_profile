import { lazy } from 'react';

const loadUsersInviteList = () => import('modules/security/users-invite/pages/ProviderUsersInviteList');
export const UsersInviteList = lazy(loadUsersInviteList);

const loadProviderTabList = () => import('modules/security/users-invite/pages/ProviderTabList');
export const ProviderTabList = lazy(loadProviderTabList);
