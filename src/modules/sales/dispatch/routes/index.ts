import { DispatchList } from 'modules/sales/dispatch/pages';
import { RouteConfig } from '@dfl/react-security';
import { DISPATCH_PERMISSIONS } from 'modules/sales/dispatch/constants/dispatch.permissions';

const routes: RouteConfig = {
  DispatchList: {
    path: '/',
    permissions: DISPATCH_PERMISSIONS.DISPATCH_VIEW,
    component: DispatchList,
  },
};

export default routes;
