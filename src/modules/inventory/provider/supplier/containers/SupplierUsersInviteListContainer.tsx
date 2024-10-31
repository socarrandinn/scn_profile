import { memo } from 'react';
import { useFindProviderUsersInvites } from 'modules/security/users-invite/hooks/useFindUsersInvites';
import { SupplierUsersToolbar } from '../components/SupplierUsersToolbar';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';

const SupplierUsersInviteListContainer = () => {
  const { providerProductsId } = useProviderProductsDetail();
  return (
    <UsersInviteListContainer useHook={useFindProviderUsersInvites} entityId={providerProductsId}>
      <SupplierUsersToolbar />
    </UsersInviteListContainer>
  );
};

export default memo(SupplierUsersInviteListContainer);
