import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/dispatch/routes';

const DispatchModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/dispatches'} memory />;
};

export default DispatchModule;
