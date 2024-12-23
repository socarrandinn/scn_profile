import { RouteConfig } from '@dfl/react-security';
import ClientGeneralPage from 'modules/crm/clients/pages/tabs/ClientGeneralPage';
import ClientRecipientsPage from 'modules/crm/clients/pages/tabs/ClientRecipientsPage';
import { ClientActivity } from '../components/ClientActivity';

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
    component: ClientRecipientsPage,
  },
  // security: {
  //   path: '/security',
  //   component: ClientSecurityPage,
  // },
  activity: {
    path: '/activity',
    component: ClientActivity,
  },
};

export default clientDetailsRoutes;
