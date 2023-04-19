import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const UserAccountModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/user'} memory />;
};

export default UserAccountModule;
