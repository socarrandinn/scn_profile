import { RouteConfig } from '@dfl/react-security';
import WarehouseSystemUsers from '../pages/tabs/WarehouseSystemUsers';
import WarehouseProviderUsers from '../pages/tabs/WarehouseProviderUsers';

const warehouseUserTabRoutes: RouteConfig = {
  users: {
    path: '/system-users/*',
    component: WarehouseSystemUsers,
  },
  usersProviders: {
    path: '/providers-users/*',
    component: WarehouseProviderUsers,
  },
};
export default warehouseUserTabRoutes;
