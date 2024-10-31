import { memo } from 'react';
import { useFindProviderUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';

import { LogisticUsersToolbar } from '../components/LogisticUsersToolbar';

const LogisticUsersInviteListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  return (
    <UsersInviteListContainer useHook={useFindProviderUsersInvites} entityId={logisticId}>
      <LogisticUsersToolbar />
    </UsersInviteListContainer>
  );
};

export default memo(LogisticUsersInviteListContainer);
