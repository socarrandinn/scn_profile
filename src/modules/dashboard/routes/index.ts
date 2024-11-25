import { ClientReport, DashboardPage, ReportInventoryPage } from 'modules/dashboard/pages';

const routes = {
  Dashboard: {
    path: '/',
    component: DashboardPage,
  },
  ReportInventory: {
    path: '/reports/inventory/*',
    component: ReportInventoryPage,
    // exact: true,
  },
  ClientReport: {
    path: '/reports/clients/*',
    component: ClientReport,
    exact: true,
  },
};

export default routes;
