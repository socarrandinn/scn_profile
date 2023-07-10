import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/provider/manufacture/routes';

const ManufactureModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/provider/manufactures'} memory />;
};

export default ManufactureModule;
