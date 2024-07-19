import { RouteConfig, RouteLoader } from '@dfl/react-security';
import UsersModule from './users';
import RolesModule from './roles';
import UsersInviteModule from 'modules/security/users-invite';
import AudiLogModule from './audit-logs';

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
    path: '/users-invite/*',
    component: UsersInviteModule,
  },
  AudiLogList: {
    path: '/audit-logs/*',
    component: AudiLogModule,
  },
};

const SecurityModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/'} memory />;
};

export default SecurityModule;
