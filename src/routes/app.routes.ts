import { DashboardModule, SecurityModule, RrhhModule } from 'modules';
import { RouteConfig } from '@dfl/react-security';
import { lazy } from 'react';

const loadUserAccount = () => import('routes/UserAccount');
export const UserAccount = lazy(loadUserAccount);

const appRoutes: RouteConfig = {
  Rrhh: {
    path: '/rrhh/*',
    exact: false,
    component: RrhhModule,
  },
  Security: {
    path: '/security/*',
    exact: false,
    permissions: 'ADMIN',
    component: SecurityModule,
  },
  UserAccount: {
    path: '/user/*',
    authenticated: true,
    component: UserAccount,
  },
  Dashboard: {
    path: '/',
    exact: false,
    component: DashboardModule,
  },
};

export default appRoutes;
