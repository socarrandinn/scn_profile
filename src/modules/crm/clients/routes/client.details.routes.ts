import { RouteConfig } from '@dfl/react-security';
import ClientGeneralPage from 'modules/crm/clients/pages/tabs/ClientGeneralPage';

const clientDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ClientGeneralPage,
  },
  orders: {
    path: '/orders',
    component: () => 'orders',
  },
  recipients: {
    path: '/recipients',
    component: () => 'recipients',
  },
  security: {
    path: '/security',
    component: () => 'security',
  },
  activity: {
    path: '/activity',
    component: () => 'activity',
  },
};

export default clientDetailsRoutes;
