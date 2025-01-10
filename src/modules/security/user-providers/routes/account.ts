import AccountGeneral from 'modules/security/users/containers/UserGeneral';
import { RouteConfig } from '@dfl/react-security';
import AccountSecurity from 'modules/security/users/containers/UserSecurity';

const accountRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: AccountGeneral,
  },
  security: {
    path: '/security',
    component: AccountSecurity,
  },
};

export default accountRoutes;
