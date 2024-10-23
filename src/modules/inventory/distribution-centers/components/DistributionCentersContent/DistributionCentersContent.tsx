import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import distributionCentersRoutes from 'modules/inventory/distribution-centers/routes/distributionCenters.router.';
import { useParams } from 'react-router-dom';

const DistributionCentersContent = () => {
  const { id } = useParams();
  return (
      <RouteLoader routes={distributionCentersRoutes} notfoundRedirect={`/inventory/distribution-centers/${id as string}/general`} />
  );
};

export default memo(DistributionCentersContent);
