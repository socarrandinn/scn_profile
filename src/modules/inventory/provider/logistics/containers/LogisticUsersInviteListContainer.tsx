import { memo } from 'react';
import { useFindProviderUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { ProviderUsersInviteToolbar } from '../../../../security/users-invite/components/ProviderUsersInviteToolbar';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';
import { LOGISTICS_PERMISSIONS } from '../constants';

const LogisticUsersInviteListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  return (
    <UsersInviteListContainer
      Toolbar={<ProviderUsersInviteToolbar permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE]} />}
      useHook={useFindProviderUsersInvites}
      entityId={logisticId}
    />
  );
};

export default memo(LogisticUsersInviteListContainer);
