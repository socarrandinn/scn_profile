import { RouteConfig } from '@dfl/react-security';
import ClientGeneralPage from 'modules/crm/clients/pages/tabs/ClientGeneralPage';
import ClientRecipientsPage from 'modules/crm/clients/pages/tabs/ClientRecipientsPage';
import ClientHistoryChange from '../pages/tabs/ClientHistoryChange';
import ClientActivity from 'modules/crm/clients/pages/tabs/ClientActivity';
import ClientOrderListPage from 'modules/crm/clients/pages/tabs/ClientOrderListPage';
import ClientSecurity from '../pages/tabs/ClientSecurity';
import { CLIENTS_PERMISSIONS } from '../constants';

const clientDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ClientGeneralPage,
    permissions: [CLIENTS_PERMISSIONS.CLIENTS_VIEW]
  },
  orders: {
    path: '/orders',
    component: ClientOrderListPage,
  },
  recipients: {
    path: '/recipients',
    component: ClientRecipientsPage,
  },
  security: {
    path: '/security',
    component: ClientSecurity,
    permissions: ['ADMIN'],
  },
  activity: {
    path: '/activity',
    component: ClientActivity,
  },
  history_change: {
    path: '/history_change',
    component: ClientHistoryChange,
    permissions: ['ADMIN'],
  },
};

export default clientDetailsRoutes;
