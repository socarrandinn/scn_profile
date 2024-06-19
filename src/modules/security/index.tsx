import { RouteConfig, RouteLoader } from '@dfl/react-security';
import UsersModule from './users';
import RolesModule from './roles';
import UsersInviteModule from 'modules/security/users-invite';

const routes: RouteConfig = {
  Users: {
    path: '/users/*',
    exact: false,
    permissions: 'ADMIN',
    component: UsersModule,
  },
  Roles: {
    path: '/roles/*',
    exact: false,
    permissions: 'ADMIN',
    component: RolesModule,
  },
    UsersInviteList: {
              path: '/users-invites/*',
              component: UsersInviteModule,
            }
};

const SecurityModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/'} memory />;
};

export default SecurityModule;
