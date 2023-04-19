import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/rrhh/settings/work-location/routes';

const WorkLocationModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/work-locations'} memory />;
};

export default WorkLocationModule;
