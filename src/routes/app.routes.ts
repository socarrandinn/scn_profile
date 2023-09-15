import { DashboardModule, SecurityModule, StoreModule, ClientModule, ProviderModule } from 'modules';
import { RouteConfig } from '@dfl/react-security';
import { lazy } from 'react';
import { EmptyListPage } from 'components/EmptyListPage';

const loadUserAccount = () => import('routes/UserAccount');
export const UserAccount = lazy(loadUserAccount);

const appRoutes: RouteConfig = {
  Rrhh: {
    path: '/store/*',
    exact: false,
    component: StoreModule,
  },
  Provider: {
    path: '/provider/*',
    exact: false,
    component: ProviderModule,
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
  JobOffers: {
    path: '/general/empty-list',
    exact: false,
    component: EmptyListPage,
  },
  Client: {
    path: '/client/*',
    exact: false,
    component: ClientModule,
  },
};

export default appRoutes;
