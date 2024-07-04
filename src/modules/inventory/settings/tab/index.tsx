import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/settings/tab/routes';

const TabModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/tabs'} memory />;
};

export default TabModule;
