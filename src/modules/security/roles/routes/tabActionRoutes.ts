
import { RouteConfig } from '@dfl/react-security';
import { RoleList, RoleProviderList } from 'modules/security/roles/pages';

const tabActionRoutes: RouteConfig = {
  system: {
    path: '/system',
    component: RoleList,
  },
  providers: {
    path: '/providers',
    component: RoleProviderList,
  },
};
export default tabActionRoutes;
