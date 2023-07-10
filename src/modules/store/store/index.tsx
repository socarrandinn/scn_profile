import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/store/routes';

const StoreModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/stores'} memory />;
};

export default StoreModule;
