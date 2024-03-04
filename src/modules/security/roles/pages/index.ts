import { lazy } from 'react';

const loadRoleList = () => import('modules/security/roles/pages/RoleList');
export const RoleList = lazy(loadRoleList);

const loadRoleDetails = () => import('modules/security/roles/pages/RoleDetails');
export const RoleDetails = lazy(loadRoleDetails);

const loadRoleProviderDetails = () => import('modules/security/roles/pages/RoleProviderDetails');
export const RoleProviderDetails = lazy(loadRoleProviderDetails);

const loadRoleTabList = () => import('modules/security/roles/pages/RoleTabList');
export const RoleTabList = lazy(loadRoleTabList);

const loadRoleProviderList = () => import('modules/security/roles/pages/RoleProviderList');
export const RoleProviderList = lazy(loadRoleProviderList);
