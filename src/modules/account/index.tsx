import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const UserAccountModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/account'} memory />;
};

export default UserAccountModule;
