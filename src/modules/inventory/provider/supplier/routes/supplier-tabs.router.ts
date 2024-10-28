import { RouteConfig } from '@dfl/react-security';
import {
  SupplierGeneralPage,
  SupplierProductPage,
  SupplierProductsPage,
  SupplierReportSalePage,
  SupplierHistoryChangePage,
} from '../pages/tabs';
import SupplierInventoryContainer from 'modules/inventory/provider/supplier/containers/SupplierInventoryContainer';
import SupplierUserTabList from '../pages/tabs/SupplierUserTabList';

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
    path: '/users/*',
    component: SupplierUserTabList,
  },
  sale_report: {
    path: '/sale_report',
    component: SupplierReportSalePage,
  },
  conciliations: {
    path: '/conciliations',
    component: SupplierProductPage,
  },
  settings: {
    path: '/settings',
    component: SupplierProductPage,
  },
  history_change: {
    path: '/history_change',
    component: SupplierHistoryChangePage,
  },
};

export default SupplierRoutes;
