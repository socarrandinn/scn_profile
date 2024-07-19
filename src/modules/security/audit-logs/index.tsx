import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const AudiLogModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/'} memory />;
};

export default AudiLogModule;
