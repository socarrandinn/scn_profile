import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/provider/logistics/routes';

const LogisticsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/provider/logistics'} memory />;
};

export default LogisticsModule;
