import { RouteConfig } from '@dfl/react-security';
import SupplierProductPage from '../pages/tabs/SupplierProductPage';
import { SupplierInventoryPage, SupplierGeneralPage, SupplierProductsPage } from '../pages';

const SupplierRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
  },
  products: {
    path: '/products',
    component: SupplierProductsPage,
  },
  inventory: {
    path: '/inventory',
    component: SupplierInventoryPage
  },
  sale_report: {
    path: '/sale_report',
    component: SupplierProductPage,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  conciliations: {
    path: '/conciliations',
    component: SupplierProductPage,
    data: { tab: 'CONCILIACIONES' },
  },
  history_change: {
    path: '/history_change',
    component: SupplierProductPage,
    data: { tab: 'HISTORIAL DE CAMBIOS' },
  },
  settings: {
    path: '/settings',
    component: SupplierProductPage,
    data: { tab: 'CONFIGURACION' },
  },
};

export default SupplierRoutes;
