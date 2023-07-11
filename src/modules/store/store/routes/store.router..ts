
import { RouteConfig } from '@dfl/react-security';
import UserStore from 'modules/store/store/components/UserStore/UserStore';
import StoreProduct from 'modules/store/store/components/StoreProduct/StoreProduct';

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
