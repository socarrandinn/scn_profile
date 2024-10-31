import { RouteConfig } from '@dfl/react-security';
import ManufacturerPageDefault from '../pages/ManufacturerPageDefault';
import ManufacturerGeneralPage from '../pages/tags/ManufacturerGeneralPage';
import ManufacturerHistoryChangePage from '../pages/tags/ManufacturerHistoryChangePage';

const manufactureDetailRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ManufacturerGeneralPage,
  },
  products: {
    path: '/products',
    component: ManufacturerPageDefault,
    data: { tab: 'PRODUCTOS' },
  },
  inventory: {
    path: '/inventory',
    component: ManufacturerPageDefault,
    data: { tab: 'ALMACENES' },
  },
  sale_report: {
    path: '/sale_report',
    component: ManufacturerPageDefault,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  conciliations: {
    path: '/conciliations',
    component: ManufacturerPageDefault,
    data: { tab: 'CONCILIACIONES' },
  },
  settings: {
    path: '/settings',
    component: ManufacturerPageDefault,
    data: { tab: 'CONFIGURACION' },
  },
  history_change: {
    path: '/history_change',
    component: ManufacturerHistoryChangePage,
  },
};

export default manufactureDetailRoutes;
