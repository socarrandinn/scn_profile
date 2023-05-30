import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/rrhh/analytic/routes';

const AnalyticModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/analytics/general'} memory />;
};

export default AnalyticModule;
