import {
  DashboardModule,
  SecurityModule,
  InventoryModule,
  ClientModule,
  OrderStatusModule,
  SalesModule,
  CRMModule,
} from 'modules';
import { RouteConfig } from '@dfl/react-security';
import { lazy } from 'react';
import { EmptyListPage } from 'components/EmptyListPage';

const loadUserAccount = () => import('routes/UserAccount');
export const UserAccount = lazy(loadUserAccount);

const appRoutes: RouteConfig = {
  Inventory: {
    path: '/inventory/*',
    exact: false,
    component: InventoryModule,
  },
  Sales: {
    path: '/sales/*',
    exact: false,
    component: SalesModule,
  },
  CRMModule: {
    path: '/crm/*',
    exact: false,
    component: CRMModule,
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
  OrderStatus: {
    path: '/order/status',
    exact: false,
    component: OrderStatusModule,
  },
};

export default appRoutes;
