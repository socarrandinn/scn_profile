import { RouteConfig } from '@dfl/react-security';
import {
  SupplierGeneralPage,
  SupplierProductPage,
  SupplierProductsPage,
  SupplierReportSalePage,
  SupplierUsersPage,
  SupplierHistoryChange,
} from '../pages/tabs';
import SupplierInventoryContainer from 'modules/inventory/provider/supplier/containers/SupplierInventoryContainer';

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
    component: SupplierInventoryContainer,
  },
  users: {
    path: '/users',
    component: SupplierUsersPage,
  },
  sale_report: {
    path: '/sale_report',
    component: SupplierReportSalePage
  },
  conciliations: {
    path: '/conciliations',
    component: SupplierProductPage,
    data: { tab: 'CONCILIACIONES' },
  },
  history_change: {
    path: '/history_change',
    component: SupplierHistoryChange,
    data: { tab: 'HISTORIAL DE CAMBIOS' },
  },
  settings: {
    path: '/settings',
    component: SupplierProductPage,
    data: { tab: 'CONFIGURACION' },
  },
};

export default SupplierRoutes;
