import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/employee/settings/work-location/routes';

const WorkLocationModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/employee/settings/work-locations'} memory />;
};

export default WorkLocationModule;
