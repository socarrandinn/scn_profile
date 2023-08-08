import { StoreAreaList } from 'modules/inventory/settings/store-area/pages';
import { RouteConfig } from '@dfl/react-security';
import { STORE_AREA_PERMISSIONS } from 'modules/inventory/settings/store-area/constants/store-area.permissions';

const routes: RouteConfig = {
  StoreAreaList: {
    path: '/',
    permissions: STORE_AREA_PERMISSIONS.STORE_AREA_VIEW,
    component: StoreAreaList,
  },
};

export default routes;
