import { DashboardModule, SecurityModule, DocsModule } from 'modules';
import { RouteConfig } from '@dfl/react-security';

const appRoutes: RouteConfig = {
  Security: {
    path: '/security/*',
    exact: false,
    permissions: 'ADMIN',
    component: SecurityModule,
  },
  Docs: {
    path: '/docs/*',
    exact: false,
    component: DocsModule,
  },
  Dashboard: {
    path: '/*',
    exact: false,
    component: DashboardModule,
  },
};

export default appRoutes;
