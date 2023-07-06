import { CreateStore, DetailStore, StoreList } from 'modules/store/store/pages';
import { RouteConfig } from '@dfl/react-security';
import { STORE_PERMISSIONS } from 'modules/store/store/constants/store.permissions';

const routes: RouteConfig = {
  StoreList: {
    path: '/',
    permissions: STORE_PERMISSIONS.STORE_VIEW,
    component: StoreList,
  },
  CreateStore: {
    path: '/create',
    permissions: STORE_PERMISSIONS.STORE_WRITE,
    component: CreateStore,
  },
  DetailStore: {
    path: '/:id/*',
    permissions: STORE_PERMISSIONS.STORE_WRITE,
    component: DetailStore,
  },
};

export default routes;
