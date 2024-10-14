import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/settings/warehouse-area/routes';

const WarehouseAreaModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/warehouse-areas'} memory />;
};

export default WarehouseAreaModule;
