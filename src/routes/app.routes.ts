import { DashboardModule, SecurityModule } from 'modules';
import { RouteConfig } from '@dfl/react-security';

const appRoutes: RouteConfig = {
  Security: {
    path: '/security/*',
    exact: false,
    permissions: 'ADMIN',
    component: SecurityModule,
  },
  Dashboard: {
    path: '/*',
    exact: false,
    component: DashboardModule,
  },
};

export default appRoutes;
