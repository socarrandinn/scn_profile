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

const loadCRMModule = () => import('modules/crm');
export const CRMModule = lazy(loadCRMModule);

const loadClientModule = () => import('modules/client');
export const ClientModule = lazy(loadClientModule);

const loadOrderStatusModule = () => import('modules/sales/settings/order-status');
export const OrderStatusModule = lazy(loadOrderStatusModule);

const loadLogisticModule = () => import('modules/logistic');
export const LogisticModule = lazy(loadLogisticModule);

const loadSalesOfferModule = () => import('modules/sales-offer');
export const SalesOfferModule = lazy(loadSalesOfferModule);

const loadCmsModule = () => import('modules/cms');
export const CmsModule = lazy(loadCmsModule);
