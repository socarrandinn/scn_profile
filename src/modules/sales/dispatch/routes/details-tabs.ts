import { RouteConfig } from '@dfl/react-security';
import DispatchSubOrderPage from '../pages/tabs/DispatchSubOrderPage';
import DispatchProductPage from '../pages/tabs/DispatchProductPage';
import DispatchWarehousePage from '../pages/tabs/DispatchWarehousePage';

const dispatchDetailRoutes: RouteConfig = {
  orders: {
    path: '/orders',
    component: DispatchSubOrderPage,
  },
  products: {
    path: '/products',
    component: DispatchProductPage,
  },
  warehouses: {
    path: '/warehouses',
    component: DispatchWarehousePage,
  },
};

export default dispatchDetailRoutes;
