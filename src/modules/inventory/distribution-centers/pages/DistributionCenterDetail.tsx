import { memo } from 'react';
import DistributionCentersContainer from 'modules/inventory/distribution-centers/containers/DistributionCentersContainer';

const storeDetail = () => {
  return <DistributionCentersContainer />;
};

export default memo(storeDetail);
