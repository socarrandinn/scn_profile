import { memo } from 'react';
import { useFindWarehouseUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';
import { useWarehouseDetail } from '../context/WarehouseContext';
import { WarehouseUserListToolbar } from '../components/WarehouseUserListToolbar';

const WarehouseInviteListContainer = () => {
  const { warehouseId } = useWarehouseDetail();

  return (
    <UsersInviteListContainer useHook={useFindWarehouseUsersInvites} entityId={warehouseId}>
      <WarehouseUserListToolbar />
    </UsersInviteListContainer>
  );
};

export default memo(WarehouseInviteListContainer);
