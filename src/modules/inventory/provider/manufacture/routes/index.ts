import { ManufactureDetail, ManufactureList } from 'modules/inventory/provider/manufacture/pages';
import { RouteConfig } from '@dfl/react-security';
import { MANUFACTURE_PERMISSIONS } from 'modules/inventory/provider/manufacture/constants/manufacture.permissions';

const routes: RouteConfig = {
  ManufactureList: {
    path: '/',
    permissions: MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW,
    component: ManufactureList,
  },
  ManufactureDetail: {
    path: '/:id/*',
    permissions: MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW,
    component: ManufactureDetail,
  },
};

export default routes;
