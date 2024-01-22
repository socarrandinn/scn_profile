import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/inventory/store/components/UserStore/UserStore';
import StoreProductsListComponent from 'modules/inventory/store/components/storeProductsList/storeProductsList';
import { StoreProviderSupplierPage, StoreGeneralPage } from '../pages/tabs';

const storesRoutes: RouteConfig = {
  users: {
    path: '/users',
    component: UserStore,
  },
  security: {
    path: '/products',
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
};

export default storesRoutes;
