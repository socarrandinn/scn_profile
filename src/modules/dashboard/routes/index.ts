import { DashboardPage, ReportInventoryPage } from 'modules/dashboard/pages';

const routes = {
  Dashboard: {
    path: '/',
    component: ReportInventoryPage,
  },
  ReportInventory: {
    path: '/reports/inventory',
    component: ReportInventoryPage,
  },
};

export default routes;
