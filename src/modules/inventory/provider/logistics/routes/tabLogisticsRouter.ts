import { RouteConfig } from '@dfl/react-security';
import LogisticsPageDefault from 'modules/inventory/provider/logistics/pages/LogisticsPageDefault';
import SupplierGeneralPage from 'modules/inventory/provider/logistics/pages/tabs/SupplierGeneralPage';
import LogisticInventoryContainer from 'modules/inventory/provider/logistics/containers/LogisticInventoryContainer';
import LogisticProductsPage from 'modules/inventory/provider/logistics/pages/tabs/LogisticProductsPage';
import LogisticUsersPage from 'modules/inventory/provider/logistics/pages/tabs/LogisticUsersPage';
import LogisticHistoryChangePage from '../pages/tabs/LogisticHistoryChangePage';
import LogisticStoresContainer from 'modules/inventory/provider/logistics/containers/LogisticWarehousesContainer';

const logisticRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
  },
  products: {
    path: '/products',
    component: LogisticProductsPage,
  },
  users: {
    path: '/users',
    component: LogisticUsersPage,
  },
  inventory: {
    path: '/inventory',
    component: LogisticInventoryContainer,
  },
  warehouses: {
    path: '/stores',
    component: LogisticStoresContainer,
  },
  sale_report: {
    path: '/sale_report',
    component: LogisticsPageDefault,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  conciliations: {
    path: '/conciliations',
    component: LogisticsPageDefault,
    data: { tab: 'CONCILIACIONES' },
  },
  history_change: {
    path: '/history_change',
    component: LogisticHistoryChangePage,
  },
  // settings: {
  //   path: '/settings',
  //   component: LogisticsPageDefault,
  //   data: { tab: 'CONFIGURACION' },
  // },
};

export default logisticRoutes;
