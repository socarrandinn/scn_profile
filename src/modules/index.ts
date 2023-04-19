import { lazy } from 'react';

const loadAuthenticationModule = () => import('modules/authentication');
export const AuthenticationModule = lazy(loadAuthenticationModule);

const loadSecurityModule = () => import('modules/security');
export const SecurityModule = lazy(loadSecurityModule);

const loadUserAccountModule = () => import('modules/account');
export const UserAccountModule = lazy(loadUserAccountModule);

const loadDashboardModule = () => import('modules/dashboard');
export const DashboardModule = lazy(loadDashboardModule);
