import { lazy } from 'react';

const loadDashboardPage = () => import('modules/dashboard/pages/DashboardPage');
export const DashboardPage = lazy(loadDashboardPage);
