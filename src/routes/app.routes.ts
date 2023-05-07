import { DashboardModule, SecurityModule, DemosModule } from 'modules';
import { RouteConfig } from '@dfl/react-security';
import { lazy } from 'react';

const loadUserAccount = () => import('routes/UserAccount');
export const UserAccount = lazy(loadUserAccount);

const appRoutes: RouteConfig = {
  Security: {
    path: '/security/*',
    exact: false,
    permissions: 'ADMIN',
    component: SecurityModule,
  },
  DemosModule: {
    path: '/demos/*',
    exact: false,
    component: DemosModule,
  },
  Dashboard: {
    path: '/*',
    exact: false,
    component: DashboardModule,
  },
  UserAccount: {
    path: '/user/*',
    authenticated: true,
    component: UserAccount,
  },
};

export default appRoutes;
