import routes from 'modules/logistic/routes';
import { RouteLoader } from '@dfl/react-security';

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/'} memory />;
};

export default Module;
