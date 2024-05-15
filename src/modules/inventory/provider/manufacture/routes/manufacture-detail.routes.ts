import { RouteConfig } from '@dfl/react-security';
import ManufacturerPageDefault from '../pages/ManufacturerPageDefault';
import ManufacturerGeneralPage from '../pages/tags/ManufacturerGeneralPage';

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
  history_change: {
    path: '/history_change',
    component: ManufacturerPageDefault,
    data: { tab: 'HISTORIAL DE CAMBIOS' },
  },
  settings: {
    path: '/settings',
    component: ManufacturerPageDefault,
    data: { tab: 'CONFIGURACION' },
  },
};

export default manufactureDetailRoutes;
