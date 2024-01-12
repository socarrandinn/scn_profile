import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/crm/clients/routes';

const ClientsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/clients'} memory />;
};

export default ClientsModule;
