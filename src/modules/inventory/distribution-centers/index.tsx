import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/distribution-centers/routes';

const DistributionCentersModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/distribution-centers'} memory />;
};

export default DistributionCentersModule;
