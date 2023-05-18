import { AdvertisementList } from 'modules/rrhh/advertisement/pages';
import { RouteConfig } from '@dfl/react-security';
import { ADVERTISEMENTS_PERMISSIONS } from 'modules/rrhh/advertisement/constants/advertisement.permissions';

const routes: RouteConfig = {
  AdvertisementList: {
    path: '/',
    permissions: ADVERTISEMENTS_PERMISSIONS.VIEW,
    component: AdvertisementList,
  },
};

export default routes;
