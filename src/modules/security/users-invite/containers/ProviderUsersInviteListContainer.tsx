import { memo } from 'react';
import { useFindUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { ProviderUsersInviteToolbar } from '../components/ProviderUsersInviteToolbar';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';

const ProviderUsersInviteListContainer = () => {
  return (
    <UsersInviteListContainer useHook={useFindUsersInvites}>
      <ProviderUsersInviteToolbar
        permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_WRITE, SUPPLIER_PERMISSIONS.SUPPLIER_VIEW]}
      />
    </UsersInviteListContainer>
  );
};

export default memo(ProviderUsersInviteListContainer);
