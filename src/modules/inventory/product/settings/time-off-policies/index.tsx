import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/product/settings/time-off-policies/routes';

const TimeOffPoliciesModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/product/settings/time-off-policies'} memory />;
};

export default TimeOffPoliciesModule;
