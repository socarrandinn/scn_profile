import AccountGeneral from 'modules/account/containers/AccountGeneral';
import { RouteConfig } from '@dfl/react-security';
import AccountSecurity from 'modules/account/containers/AccountSecurity';

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
