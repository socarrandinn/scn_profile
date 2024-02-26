import { lazy } from 'react';

const loadDashboardPage = () => import('modules/dashboard/pages/DashboardPage');
export const DashboardPage = lazy(loadDashboardPage);

const loadReportInventoryPage = () => import('modules/dashboard/pages/ReportPage');
export const ReportInventoryPage = lazy(loadReportInventoryPage);
