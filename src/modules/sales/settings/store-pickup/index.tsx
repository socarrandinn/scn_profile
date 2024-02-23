import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const StorePickupModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings//store-pickup'} memory />;
};

export default StorePickupModule;
