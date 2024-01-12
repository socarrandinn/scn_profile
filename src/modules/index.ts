import { lazy } from 'react';

const loadAuthenticationModule = () => import('modules/authentication');
export const AuthenticationModule = lazy(loadAuthenticationModule);

const loadSecurityModule = () => import('modules/security');
export const SecurityModule = lazy(loadSecurityModule);

const loadUserAccountModule = () => import('modules/account');
export const UserAccountModule = lazy(loadUserAccountModule);

const loadDashboardModule = () => import('modules/dashboard');
export const DashboardModule = lazy(loadDashboardModule);

const loadInventoryModule = () => import('modules/inventory');
export const InventoryModule = lazy(loadInventoryModule);

const loadSalesModule = () => import('modules/sales');
export const SalesModule = lazy(loadSalesModule);

const loadClientModule = () => import('modules/client');
export const ClientModule = lazy(loadClientModule);

const loadOrderStatusModule = () => import('modules/sales/settings/order-status');
export const OrderStatusModule = lazy(loadOrderStatusModule);
