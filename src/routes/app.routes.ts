import {
  DashboardModule,
  SecurityModule,
  InventoryModule,
  ClientModule,
  OrderStatusModule,
  SalesModule,
  CRMModule,
  LogisticModule,
  SalesOfferModule,
  CmsModule,
  AccountModule
} from 'modules';
import { RouteConfig } from '@dfl/react-security';
import { EmptyListPage } from 'components/EmptyListPage';

const appRoutes: RouteConfig = {
  Inventory: {
    path: '/inventory/*',
    exact: false,
    component: InventoryModule,
  },
  Logistic: {
    path: '/logistic/*',
    exact: false,
    component: LogisticModule,
  },
  Sales: {
    path: '/sales/*',
    exact: false,
    component: SalesModule,
  },
  SalesOffer: {
    path: '/sales/offers/*',
    exact: false,
    component: SalesOfferModule,
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
    path: '/account/*',
    authenticated: true,
    component: AccountModule,
  },
  Dashboard: {
    path: '/*',
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
  Cms: {
    path: '/cms/*',
    exact: false,
    component: CmsModule,
  },
};

export default appRoutes;
