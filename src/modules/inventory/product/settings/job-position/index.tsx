import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/product/settings/job-position/routes';

const JobPositionModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/job-positions'} memory />;
};

export default JobPositionModule;
