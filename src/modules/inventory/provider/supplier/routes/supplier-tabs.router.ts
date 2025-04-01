import { RouteConfig } from '@dfl/react-security';
import {
  SupplierGeneralPage,
  SupplierProductPage,
  SupplierProductsPage,
  SupplierReportSalePage,
  SupplierHistoryChangePage,
  SupplierUsersPage,
  SupplierInventoryPage,
  SupplierWarehouses,
} from '../pages/tabs';
import { SUPPLIER_PERMISSIONS } from '../constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';

const supplierRoutes: RouteConfig = {
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
    component: SupplierInventoryPage,
    permissions: [STOCK_PERMISSIONS.VIEW],
  },
  warehouses: {
    path: '/warehouses',
    component: SupplierWarehouses,
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
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
  users: {
    path: '/users/*',
    permissions: 'USER_ADMIN',
    component: SupplierUsersPage,
  },
  history_change: {
    path: '/history_change',
    component: SupplierHistoryChangePage,
    permissions: ['ADMIN'],
  },
};

export default supplierRoutes;
