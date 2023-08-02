import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/product/settings/work-location/routes';

const WorkLocationModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/product/settings/work-locations'} memory />;
};

export default WorkLocationModule;
