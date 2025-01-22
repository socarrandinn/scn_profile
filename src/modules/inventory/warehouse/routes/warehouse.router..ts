import { RouteConfig } from '@dfl/react-security';
import { WarehouseProviderSupplierPage, WarehouseGeneralPage, WarehouseUsers } from '../pages/tabs';
import StoreHistoryChangeContainer from '../containers/StoreHistoryChangeContainer';
import { WarehouseProductList } from '../components/WarehouseProductList';
import { WAREHOUSE_PERMISSIONS } from '../constants';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { USER_PERMISSIONS } from 'modules/security/users/constants/warehouse.permissions';

const warehouseRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: WarehouseGeneralPage,
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
  },
  inventory: {
    path: '/inventory',
    component: WarehouseProductList,
    permissions: [STOCK_PERMISSIONS.VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  supplier: {
    path: '/supplier',
    component: WarehouseProviderSupplierPage,
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_SUPPLIER_PROVIDER_VIEW],
  },
  users: {
    path: '/users/*',
    component: WarehouseUsers,
    permissions: [USER_PERMISSIONS.USER_VIEW],
  },
  history_change: {
    path: '/history_change',
    component: StoreHistoryChangeContainer,
    permissions: ['ADMIN'],
  },
};

export default warehouseRoutes;
