import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/express-delivery/routes';

const ExpressDeliveryModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/express-deliveries'} memory />;
};

export default ExpressDeliveryModule;
