import { RouteConfig } from '@dfl/react-security';
import { WarehouseProviderSupplierPage, WarehouseGeneralPage } from '../pages/tabs';
import StoreHistoryChangeContainer from '../containers/StoreHistoryChangeContainer';
import { WarehouseProductList } from '../components/WarehouseProductList';
import WarehouseUserTabList from '../pages/tabs/WarehouseUserTabList';
import { WAREHOUSE_PERMISSIONS } from '../constants';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';

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
  // users: {
  //   path: '/users/*',
  //   component: WarehouseUserTabList,
  //  permissions: ['ADMIN'],
  // },

  history_change: {
    path: '/history_change',
    component: StoreHistoryChangeContainer,
    permissions: ['ADMIN'],
  },
};

export default warehouseRoutes;
