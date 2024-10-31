import { memo } from 'react';
import { useFindDistributionCenterUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { useDistributionCenterDetail } from '../context/DistributioncentersContext';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';
import { DistributionCenterUserListToolbar } from '../components/DistributionCenterUserListToolbar';

const DistributionCenterInviteListContainer = () => {
  const { distributionCenterId } = useDistributionCenterDetail();

  return (
    <UsersInviteListContainer useHook={useFindDistributionCenterUsersInvites} entityId={distributionCenterId}>
      <DistributionCenterUserListToolbar />
    </UsersInviteListContainer>
  );
};

export default memo(DistributionCenterInviteListContainer);
