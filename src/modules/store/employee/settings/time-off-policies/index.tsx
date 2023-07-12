import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/employee/settings/time-off-policies/routes';

const TimeOffPoliciesModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/employee/settings/time-off-policies'} memory />;
};

export default TimeOffPoliciesModule;
