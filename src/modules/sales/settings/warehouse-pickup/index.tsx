import { RouteLoader } from '@dfl/react-security';
import routes from './routes';

const WarehousePickupModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/warehouse-pickup'} memory />;
};

export default WarehousePickupModule;
