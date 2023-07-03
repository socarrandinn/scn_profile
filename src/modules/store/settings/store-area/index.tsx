import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/settings/store-area/routes';

const StoreAreaModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings/store-areas'} memory />;
};

export default StoreAreaModule;
