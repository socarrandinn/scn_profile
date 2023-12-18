import { RouteConfig } from '@dfl/react-security';
import SupplierGeneralPage from '../pages/tabs/SupplierGeneralPage';
import SupplierProductPage from '../pages/tabs/SupplierProductPage';

const SupplierRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
  },
  products: {
    path: '/products',
    component: SupplierProductPage,
  },
  stores: {
    path: '/stores',
    component: SupplierProductPage,
    data: { tab: 'ALMACENES' },
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
