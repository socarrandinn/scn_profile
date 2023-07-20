import { LogisticsDetail, LogisticsList } from 'modules/provider/logistics/pages';
import { RouteConfig } from '@dfl/react-security';
import { LOGISTICS_PERMISSIONS } from 'modules/provider/logistics/constants/logistics.permissions';
import CreateLogistcs from 'modules/provider/logistics/pages/CreateLogistics';

const routes: RouteConfig = {
  LogisticsList: {
    path: '/',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_VIEW,
    component: LogisticsList,
  },
  CreateLogistics: {
    path: '/create',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_WRITE,
    component: CreateLogistcs,
  },
  DetailLogistics: {
    path: '/:id/*',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_WRITE,
    component: LogisticsDetail,
  },
};

export default routes;
