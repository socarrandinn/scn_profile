import routes from 'modules/rrhh/job-position/routes';
import { RouteLoader } from '@dfl/react-security';

const RRHHModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh'} memory />;
};

export default RRHHModule;
