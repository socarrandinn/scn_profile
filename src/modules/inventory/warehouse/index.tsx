import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/warehouse/routes';

const WarehouseModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/warehouses'} memory />;
};

export default WarehouseModule;
