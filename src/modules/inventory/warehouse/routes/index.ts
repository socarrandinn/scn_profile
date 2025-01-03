import { CreateStore, DetailStore, StoreList } from 'modules/inventory/warehouse/pages';
import { RouteConfig } from '@dfl/react-security';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';

const routes: RouteConfig = {
  StoreList: {
    path: '/',
    permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW,
    component: StoreList,
  },
  CreateStore: {
    path: '/create',
    permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
    component: CreateStore,
  },
  DetailStore: {
    path: '/:id/*',
    permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW,
    component: DetailStore,
  },
};

export default routes;
