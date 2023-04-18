import { DashboardModule, SecurityModule, DemosModule } from 'modules';
import { RouteConfig } from '@dfl/react-security';

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
};

export default appRoutes;
