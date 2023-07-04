import { ManufactureList } from 'modules/provider/manufacture/pages';
import { RouteConfig } from '@dfl/react-security';
import { MANUFACTURE_PERMISSIONS } from 'modules/provider/manufacture/constants/manufacture.permissions';

const routes: RouteConfig = {
  ManufactureList: {
    path: '/',
    permissions: MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW,
    component: ManufactureList,
  },
};

export default routes;
