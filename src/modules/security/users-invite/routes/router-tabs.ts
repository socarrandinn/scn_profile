import { RouteConfig } from '@dfl/react-security';
import { UserProviderList } from 'modules/security/users/pages';
import { UsersInviteList } from '../pages';

const providerTabRoutes: RouteConfig = {
  users: {
    path: '/users',
    component: UserProviderList,
  },
  usersInvite: {
    path: '/users-invite',
    component: UsersInviteList,
  },
};
export default providerTabRoutes;
