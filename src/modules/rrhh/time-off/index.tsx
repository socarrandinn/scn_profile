import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/rrhh/time-off/routes';

const TimeOffRequestsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/time-off/requests'} memory />;
};

export default TimeOffRequestsModule;
