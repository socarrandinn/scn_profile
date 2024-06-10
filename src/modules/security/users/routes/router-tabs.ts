import { RouteConfig } from '@dfl/react-security';
import { UserList, UserProviderList } from '../pages';

const userTabActionRoutes: RouteConfig = {
  system: {
    path: '/system',
    component: UserList,
  },
  providers: {
    path: '/providers',
    component: UserProviderList,
  },
};
export default userTabActionRoutes;
