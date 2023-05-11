import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/rrhh/settings/time-off-policies/routes';

const TimeOffPoliciesModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/time-off-policies'} memory />;
};

export default TimeOffPoliciesModule;
