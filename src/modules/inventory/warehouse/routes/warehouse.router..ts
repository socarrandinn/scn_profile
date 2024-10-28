import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/inventory/warehouse/components/UserStore/UserStore';
import StoreProductsListComponent from 'modules/inventory/warehouse/components/storeProductsList/storeProductsList';
import { WarehouseProviderSupplierPage, WarehouseGeneralPage } from '../pages/tabs';
import StoreHistoryChangeContainer from '../containers/StoreHistoryChangeContainer';

const warehouseRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: WarehouseGeneralPage,
  },

  security: {
    path: '/inventory',
    component: StoreProductsListComponent,
  },
  supplier: {
    path: '/supplier',
    component: WarehouseProviderSupplierPage,
  },

  users: {
    path: '/users',
    component: UserStore,
  },

  history_change: {
    path: '/history_change',
    component: StoreHistoryChangeContainer,
  },
};

export default warehouseRoutes;
