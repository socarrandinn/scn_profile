
import { RouteConfig } from '@dfl/react-security';
import { RoleList, RoleProviderList } from 'modules/security/roles/pages';
import RolePublicList from '../pages/RolePublicList';

const tabActionRoutes: RouteConfig = {
  system: {
    path: '/system',
    component: RoleList,
  },
  providers: {
    path: '/providers',
    component: RoleProviderList,
  },
  public: {
    path: '/public',
    component: RolePublicList,
  },
};
export default tabActionRoutes;
