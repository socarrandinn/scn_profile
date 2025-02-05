import { memo } from 'react';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

const WarehouseUsers = () => {
  const { distributionCenterId, distributionCenter } = useDistributionCenterDetail();

  return (
    <ProviderUsersContainer
      path={`/inventory/distribution-centers/${distributionCenterId}/users`}
      provider={distributionCenter?.name}
      providerType={PROVIDER_TYPE_ENUM.DISTRIBUTION_CENTER}
    />
  );
};

export default memo(WarehouseUsers);
