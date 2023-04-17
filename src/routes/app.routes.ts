import { DashboardModule, SecurityModule, RrhhModule } from 'modules';
import { RouteConfig } from '@dfl/react-security';

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
  Dashboard: {
    path: '/*',
    exact: false,
    component: DashboardModule,
  },
};

export default appRoutes;
