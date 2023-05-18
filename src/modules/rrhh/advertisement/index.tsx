import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/rrhh/advertisement/routes';

const AdvertisementModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/advertisements'} memory />;
};

export default AdvertisementModule;
