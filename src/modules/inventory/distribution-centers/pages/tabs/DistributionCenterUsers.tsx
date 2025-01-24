import { memo } from 'react';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';

const WarehouseUsers = () => {
  const { distributionCenterId, distributionCenter } = useDistributionCenterDetail();

  return (
    <ProviderUsersContainer
      path={`/inventory/distribution-centers/${distributionCenterId}/users`}
      provider={distributionCenter?.name}
    />
  );
};

export default memo(WarehouseUsers);
