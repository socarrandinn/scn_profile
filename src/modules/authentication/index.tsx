import routes from 'modules/authentication/routes';
import { RouteLoader } from '@dfl/react-security';

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/auth/login'} />;
};

export default Module;
