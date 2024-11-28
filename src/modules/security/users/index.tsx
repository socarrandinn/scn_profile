import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/security/users/all'} memory />;
};

export default Module;
