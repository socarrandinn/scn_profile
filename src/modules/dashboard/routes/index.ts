import { DashboardPage, ReportInventoryPage } from 'modules/dashboard/pages';

const routes = {
  Dashboard: {
    path: '/',
    component: DashboardPage,
  },
  ReportInventory: {
    path: '/reports/inventory',
    component: ReportInventoryPage,
    exact: true,
  },
};

export default routes;
