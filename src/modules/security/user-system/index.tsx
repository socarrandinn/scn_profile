import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const SystemUserModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/security/system-users/all'} memory />;
};

export default SystemUserModule;
