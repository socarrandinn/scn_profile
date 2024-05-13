import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/inventory/store/components/UserStore/UserStore';
import StoreProductsListComponent from 'modules/inventory/store/components/storeProductsList/storeProductsList';
import { StoreProviderSupplierPage, StoreGeneralPage } from '../pages/tabs';
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
    component: StoreGeneralPage,
  },
  supplier: {
    path: '/supplier',
    component: StoreProviderSupplierPage,
  },
  history_change: {
    path: '/history_change',
    component: StoreHistoryChangeContainer,
  },
};

export default storesRoutes;
