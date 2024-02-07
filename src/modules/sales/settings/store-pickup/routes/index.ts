import { RouteConfig } from '@dfl/react-security';
import { STORE_PICKUP_PERMISSIONS } from '../constants';
import { StorePickupPage } from '../pages';

const routes: RouteConfig = {
  StoreAreaList: {
    path: '/',
    permissions: STORE_PICKUP_PERMISSIONS.STORE_PICKUP_VIEW,
    component: StorePickupPage,
  },
};

export default routes;
