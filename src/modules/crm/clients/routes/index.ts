import { ClientsList } from 'modules/crm/clients/pages';
import { RouteConfig } from '@dfl/react-security';
import { CLIENTS_PERMISSIONS } from 'modules/crm/clients/constants/clients.permissions';

const routes: RouteConfig = {
  ClientsList: {
    path: '/',
    permissions: CLIENTS_PERMISSIONS.CLIENTS_VIEW,
    component: ClientsList,
  },
};

export default routes;
