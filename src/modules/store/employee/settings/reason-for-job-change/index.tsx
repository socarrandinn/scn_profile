import routes from 'modules/store/employee/settings/reason-for-job-change/routes';
import { RouteLoader } from '@dfl/react-security';

const ReasonForJobChangeModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/reason-for-job-changes'} memory />;
};

export default ReasonForJobChangeModule;
