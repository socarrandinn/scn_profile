import { memo, useMemo } from 'react';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

const DistributionCenterUsers = () => {
  const { distributionCenterId, distributionCenter } = useDistributionCenterDetail();
  const path = useMemo(() => `/inventory/distribution-centers/${distributionCenterId}`, [distributionCenterId]);
  return (
    <ProviderUsersContainer
      path={`${path}/users`}
      provider={distributionCenter?.name}
      providerType={PROVIDER_TYPE_ENUM.DISTRIBUTION_CENTER}
    />
  );
};

export default memo(DistributionCenterUsers);
