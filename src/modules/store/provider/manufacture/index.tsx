import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/provider/manufacture/routes';

const ManufactureModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings/manufactures'} memory />;
};

export default ManufactureModule;
