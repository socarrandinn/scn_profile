import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/crm/report-cause/routes';

const ReportCauseModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/report-causes'} memory />;
};

export default ReportCauseModule;
