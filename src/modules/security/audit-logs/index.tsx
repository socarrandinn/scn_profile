import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const RoutesModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/'} memory />;
};

export default RoutesModule;
