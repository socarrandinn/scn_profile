import { RouteConfig } from '@dfl/react-security';
import {
  SupplierGeneralPage,
  SupplierProductPage,
  SupplierProductsPage,
  SupplierReportSalePage,
  SupplierHistoryChangePage,
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
