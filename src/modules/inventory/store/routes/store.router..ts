import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/inventory/store/components/UserStore/UserStore';
import StoreProduct from 'modules/inventory/store/components/storeProducts/storeProductsList';
import { StoreGeneralPage } from '../pages';

const storetRoutes: RouteConfig = {
  users: {
    path: '/users',
    component: UserStore,
  },
  security: {
    path: '/products',
    component: StoreProduct,
  },
  general: {
    path: '/general',
    component: StoreGeneralPage,
  },
};

export default storetRoutes;
