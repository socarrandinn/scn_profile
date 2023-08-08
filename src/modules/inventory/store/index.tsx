import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/store/routes';

const StoreModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/stores'} memory />;
};

export default StoreModule;
