import { lazy } from 'react';

const loadRoleList = () => import('modules/security/roles/pages/RoleList');
export const RoleList = lazy(loadRoleList);

const loadRoleDetails = () => import('modules/security/roles/pages/RoleDetails');
export const RoleDetails = lazy(loadRoleDetails);
