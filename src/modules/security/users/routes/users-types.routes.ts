import { RouteConfig } from '@dfl/react-security';
import UserList from 'modules/security/users/pages/UserList';

const userTypesRoutes: RouteConfig = {
  all: {
    path: '/all',
    component: UserList,
  },
  active: {
    path: '/active',
    component: UserList,
  },
  unverify: {
    path: '/unverify',
    component: UserList,
  },
  lock: {
    path: '/lock',
    component: UserList,
  },
  invitation: {
    path: '/invitation',
    component: UserList,
  },
};
export default userTypesRoutes;
