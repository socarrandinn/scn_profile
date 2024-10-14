import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/inventory/warehouse/components/UserStore/UserStore';
import StoreProductsListComponent from 'modules/inventory/warehouse/components/storeProductsList/storeProductsList';
import { WarehouseProviderSupplierPage, WarehouseGeneralPage } from '../pages/tabs';
import StoreHistoryChangeContainer from '../containers/StoreHistoryChangeContainer';

const storesRoutes: RouteConfig = {
  users: {
    path: '/users',
    component: UserStore,
  },
  security: {
    path: '/inventory',
    component: StoreProductsListComponent,
  },
  general: {
    path: '/general',
    component: WarehouseGeneralPage,
  },
  supplier: {
    path: '/supplier',
    component: WarehouseProviderSupplierPage,
  },
  history_change: {
    path: '/history_change',
    component: StoreHistoryChangeContainer,
  },
};

export default storesRoutes;
