import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const UserModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/security/users'} memory />;
};

export default UserModule;
