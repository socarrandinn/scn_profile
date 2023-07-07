import { CreateStore, StoreList } from 'modules/store/store/pages';
import { RouteConfig } from '@dfl/react-security';
import { STORE_PERMISSIONS } from 'modules/store/store/constants/store.permissions';

const routes: RouteConfig = {
  StoreList: {
    path: '/',
    permissions: STORE_PERMISSIONS.STORE_VIEW,
    component: StoreList,
  },
  CreateEmployee: {
    path: '/create',
    permissions: STORE_PERMISSIONS.STORE_WRITE,
    component: CreateStore,
  },
};

export default routes;
