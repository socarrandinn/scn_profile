import { RouteConfig } from '@dfl/react-security';
import LogisticsPageDefault from 'modules/inventory/provider/logistics/pages/LogisticsPageDefault';
import SupplierGeneralPage from 'modules/inventory/provider/logistics/pages/tabs/SupplierGeneralPage';
import LogisticInventoryContainer from 'modules/inventory/provider/logistics/containers/LogisticInventoryContainer';
import LogisticProductsPage from '../pages/tabs/LogisticProductsPage';

const logisticRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
    data: { tab: 'GENERAL' },
  },
  products: {
    path: '/products',
    component: LogisticProductsPage,
    data: { tab: 'PRODUCTOS' },
  },
  inventory: {
    path: '/inventory',
    component: LogisticInventoryContainer,
    data: { tab: 'ALMACENES' },
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
    component: LogisticsPageDefault,
    data: { tab: 'HISTORIAL DE CAMBIOS' },
  },
  settings: {
    path: '/settings',
    component: LogisticsPageDefault,
    data: { tab: 'CONFIGURACION' },
  },
};

export default logisticRoutes;
