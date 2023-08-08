import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/provider/manufacture/routes';

const ManufactureModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/manufactures'} memory />;
};

export default ManufactureModule;
