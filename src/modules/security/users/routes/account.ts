import AccountGeneral from 'modules/security/users/containers/AccountGeneral';
import { RouteConfig } from '@dfl/react-security';
import AccountSecurity from 'modules/security/users/containers/AccountSecurity';

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
