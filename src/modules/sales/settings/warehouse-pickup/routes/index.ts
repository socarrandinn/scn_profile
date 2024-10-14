import { RouteConfig } from '@dfl/react-security';
import { WAREHOUSE_PICKUP_PERMISSIONS } from '../constants';
import { StorePickupPage } from '../pages';

const routes: RouteConfig = {
  StoreAreaList: {
    path: '/',
    permissions: WAREHOUSE_PICKUP_PERMISSIONS.WAREHOUSE_PICKUP_VIEW,
    component: StorePickupPage,
  },
};

export default routes;
