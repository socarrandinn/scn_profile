import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/inventory/store/components/UserStore/UserStore';
import StoreProductsListComponent from 'modules/inventory/store/components/storeProductsList/storeProductsList';
import { StoreGeneralPage } from 'modules/inventory/store/pages';

const storetRoutes: RouteConfig = {
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
};

export default storetRoutes;
