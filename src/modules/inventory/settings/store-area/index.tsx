import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/settings/store-area/routes';

const StoreAreaModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/store-areas'} memory />;
};

export default StoreAreaModule;
