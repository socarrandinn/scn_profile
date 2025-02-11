import { lazy } from 'react';

const loadRoleTabList = () => import('modules/security/roles/pages/RoleTabList');
export const RoleTabList = lazy(loadRoleTabList);

const loadRoleList = () => import('modules/security/roles/pages/RoleList');
export const RoleList = lazy(loadRoleList);

const loadRoleProviderList = () => import('modules/security/roles/pages/RoleProviderList');
export const RoleProviderList = lazy(loadRoleProviderList);

const loadRolePublicList = () => import('modules/security/roles/pages/RoleList');
export const RolePublicList = lazy(loadRolePublicList);

const loadRoleDetails = () => import('modules/security/roles/pages/RoleDetails');
export const RoleDetails = lazy(loadRoleDetails);

const loadRoleProviderDetails = () => import('modules/security/roles/pages/RoleProviderDetails');
export const RoleProviderDetails = lazy(loadRoleProviderDetails);

const loadRolePublicDetails = () => import('modules/security/roles/pages/RolePublicDetails');
export const RolePublicDetails = lazy(loadRolePublicDetails);
