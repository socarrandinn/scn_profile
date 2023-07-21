
import { RouteConfig } from '@dfl/react-security';
import RoleList from '../pages/RoleList';
import RoleProviderList from '../pages/RoleProviderList';

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
