import { RouteConfig } from '@dfl/react-security';
import ClientGeneralPage from 'modules/crm/clients/pages/tabs/ClientGeneralPage';
import ClientRecipientsPage from 'modules/crm/clients/pages/tabs/ClientRecipientsPage';
import ClientHistoryChange from '../pages/tabs/ClientHistoryChange';
import ClientActivity from '../pages/tabs/ClientActivity';

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
  history_change: {
    path: '/history_change',
    component: ClientHistoryChange,
  },
};

export default clientDetailsRoutes;
