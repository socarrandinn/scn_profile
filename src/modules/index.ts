import { lazy } from 'react';

const loadAuthenticationModule = () => import('modules/authentication');
export const AuthenticationModule = lazy(loadAuthenticationModule);

const loadSecurityModule = () => import('modules/security');
export const SecurityModule = lazy(loadSecurityModule);

const loadDashboardModule = () => import('modules/dashboard');
export const DashboardModule = lazy(loadDashboardModule);

const loadDocsModule = () => import('modules/docs');
export const DocsModule = lazy(loadDocsModule);
