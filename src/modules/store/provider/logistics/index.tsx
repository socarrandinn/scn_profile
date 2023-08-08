import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/provider/logistics/routes';

const LogisticsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings/logistics'} memory />;
};

export default LogisticsModule;
