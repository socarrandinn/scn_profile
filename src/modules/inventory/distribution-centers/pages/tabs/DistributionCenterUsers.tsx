import { memo } from 'react';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';

const WarehouseUsers = () => {
  const { distributionCenterId } = useDistributionCenterDetail();

  return (
    <ProviderUsersContainer path={`/inventory/distribution-centers/${distributionCenterId}/users`} />
  );
};

export default memo(WarehouseUsers);
