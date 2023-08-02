import { WorkLocationList } from 'modules/store/product/settings/work-location/pages';
import { RouteConfig } from '@dfl/react-security';
import { WORK_LOCATION_PERMISSIONS } from 'modules/store/product/settings/work-location/constants/work-location.permissions';

const routes: RouteConfig = {
  WorkLocationList: {
    path: '/',
    permissions: WORK_LOCATION_PERMISSIONS.WORK_LOCATION_VIEW,
    component: WorkLocationList,
  },
};

export default routes;
