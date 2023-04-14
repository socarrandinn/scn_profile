import { RouteConfig, RouteLoader } from '@dfl/react-security';
import UsersModule from './users';
import RolesModule from './roles';

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
};

const SecurityModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/'} memory />;
};

export default SecurityModule;
