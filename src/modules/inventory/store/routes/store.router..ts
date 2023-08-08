
import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/inventory/store/components/UserStore/UserStore';
import StoreProduct from 'modules/inventory/store/components/StoreProduct/StoreProduct';

const storetRoutes: RouteConfig = {
  general: {
    path: '/users',
    component: UserStore,
  },
  security: {
    path: '/product',
    component: StoreProduct,
  },
};

export default storetRoutes;
