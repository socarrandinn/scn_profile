import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/provider/logistics/routes';

const LogisticsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/logistics'} memory />;
};

export default LogisticsModule;
