import { memo } from 'react';
import { useFindOneDistributionCenters } from '../../hooks/useFindOneDistributionCenters';
import DistributionCentersCell from './DistributionCentersCell';

const DistributionCentersCellContainer = ({ distributionCenterId }: { distributionCenterId: string }) => {
  const { data } = useFindOneDistributionCenters(distributionCenterId);
  if (!data) return <></>;

  return <DistributionCentersCell name={data?.name} distributionCenterId={data?._id as string} />;
};

export default memo(DistributionCentersCellContainer);

export const renderDistributionCentersCellContainer = (distributionCenterId: string) => {
  return <DistributionCentersCellContainer distributionCenterId={distributionCenterId} />;
};
