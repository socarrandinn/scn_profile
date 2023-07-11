import { LogisticsList } from 'modules/provider/logistics/pages';
import { RouteConfig } from '@dfl/react-security';
import { LOGISTICS_PERMISSIONS } from 'modules/provider/logistics/constants/logistics.permissions';

const routes: RouteConfig = {
  LogisticsList: {
    path: '/',
    permissions: LOGISTICS_PERMISSIONS.LOGISTICS_VIEW,
    component: LogisticsList,
  },
};

export default routes;
