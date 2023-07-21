
import { RouteConfig } from '@dfl/react-security';
import RoleDetails from '../pages/RoleDetails';
import RoleList from '../pages/RoleList';
import RoleProviderList from '../pages/RoleProviderList';

const tabActionRoutes: RouteConfig = {
    users: {
      path: '/users',
      component: RoleList,
    },
    providers: {
        path: '/providers',
        component: RoleProviderList,
    },
  };
export default tabActionRoutes;
