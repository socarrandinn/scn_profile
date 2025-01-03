import { RouteConfig } from '@dfl/react-security';
import {
  SupplierGeneralPage,
  SupplierProductPage,
  SupplierProductsPage,
  SupplierReportSalePage,
  SupplierHistoryChangePage,
} from '../pages/tabs';
import SupplierInventoryContainer from 'modules/inventory/provider/supplier/containers/SupplierInventoryContainer';
import { SUPPLIER_PERMISSIONS } from '../constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';

const SupplierRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
    permissions: [SUPPLIER_PERMISSIONS.SUPPLIER_VIEW],
  },
  products: {
    path: '/products',
    component: SupplierProductsPage,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  inventory: {
    path: '/inventory',
    component: SupplierInventoryContainer,
    permissions: [STOCK_PERMISSIONS.VIEW],
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
    permissions: ['ADMIN'],
  },
};

export default SupplierRoutes;
