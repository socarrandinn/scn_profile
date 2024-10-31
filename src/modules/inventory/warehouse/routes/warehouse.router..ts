import { RouteConfig } from '@dfl/react-security';
import { WarehouseProviderSupplierPage, WarehouseGeneralPage } from '../pages/tabs';
import StoreHistoryChangeContainer from '../containers/StoreHistoryChangeContainer';
import { WarehouseProductList } from '../components/WarehouseProductList';
import WarehouseUserTabList from '../pages/tabs/WarehouseUserTabList';

const warehouseRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: WarehouseGeneralPage,
  },

  security: {
    path: '/inventory',
    component: WarehouseProductList,
  },
  supplier: {
    path: '/supplier',
    component: WarehouseProviderSupplierPage,
  },

  users: {
    path: '/users/*',
    component: WarehouseUserTabList,
  },

  history_change: {
    path: '/history_change',
    component: StoreHistoryChangeContainer,
  },
};

export default warehouseRoutes;
