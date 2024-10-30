import { memo } from 'react';
import { useFindProviderUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';

import { LogisticUsersToolbar } from '../components/LogisticUsersToolbar';

const LogisticUsersInviteListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  return (
    <UsersInviteListContainer
      Toolbar={<LogisticUsersToolbar />}
      useHook={useFindProviderUsersInvites}
      entityId={logisticId}
    />
  );
};

export default memo(LogisticUsersInviteListContainer);
