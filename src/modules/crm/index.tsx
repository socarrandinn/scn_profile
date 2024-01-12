import { RouteConfig, RouteLoader } from '@dfl/react-security';
import ClientsModule from 'modules/crm/clients';

const routes: RouteConfig = {
  ClientsList: {
    path: '/clients/*',
    component: ClientsModule,
  },
};

const CrmModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/clients'} memory />;
};

export default CrmModule;
