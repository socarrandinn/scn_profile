import { RouteConfig } from '@dfl/react-security';
import LogisticsPageDefault from 'modules/inventory/provider/logistics/pages/LogisticsPageDefault';

const logisticRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: LogisticsPageDefault,
    data: { tab: 'GENERAL' },
  },
  products: {
    path: '/products',
    component: LogisticsPageDefault,
    data: { tab: 'PRODUCTOS' },
  },
  inventory: {
    path: '/inventory',
    component: LogisticsPageDefault,
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
