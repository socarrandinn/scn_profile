import { RouteConfig } from '@dfl/react-security';
import SupplierGeneralPage from '../pages/tabs/SupplierGeneralPage';

const SupplierRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
    data: { tab: 'GENERAL' },
  },
  products: {
    path: '/products',
    component: SupplierGeneralPage,
    data: { tab: 'PRODUCTOS' },
  },
  stores: {
    path: '/stores',
    component: SupplierGeneralPage,
    data: { tab: 'ALMACENES' },
  },
  sale_report: {
    path: '/sale_report',
    component: SupplierGeneralPage,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  conciliations: {
    path: '/conciliations',
    component: SupplierGeneralPage,
    data: { tab: 'CONCILIACIONES' },
  },
  history_change: {
    path: '/history_change',
    component: SupplierGeneralPage,
    data: { tab: 'HISTORIAL DE CAMBIOS' },
  },
  settings: {
    path: '/settings',
    component: SupplierGeneralPage,
    data: { tab: 'CONFIGURACION' },
  },
};

export default SupplierRoutes;
