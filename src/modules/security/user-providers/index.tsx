import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const UserProviderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/security/providers-users/all'} memory />;
};

export default UserProviderModule;
