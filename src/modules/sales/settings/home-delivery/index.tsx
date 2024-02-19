import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/home-delivery/routes';

const HomeDeliveryModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/home-deliveries'} memory />;
};

export default HomeDeliveryModule;
