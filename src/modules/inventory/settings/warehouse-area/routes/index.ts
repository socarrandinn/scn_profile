import { StoreAreaList } from 'modules/inventory/settings/warehouse-area/pages';
import { RouteConfig } from '@dfl/react-security';
import { WAREHOUSE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants/warehouse-area.permissions';

const routes: RouteConfig = {
  StoreAreaList: {
    path: '/',
    permissions: WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_VIEW,
    component: StoreAreaList,
  },
};

export default routes;
