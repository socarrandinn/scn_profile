import { memo } from 'react';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import { ProviderTabList } from 'modules/inventory/provider/common/components/ProviderTabList';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { AddUser } from 'modules/security/user-providers/components/AddUser';
import { InviteUser } from 'modules/security/user-providers/components/InviteUser';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';

const SupplierUsersPage = () => {
  const { providerProducts } = useProviderProductsDetail();

  return (
    <UserListContainer
      path={`/inventory/settings/suppliers/${providerProducts?._id}/users`}
      columns={userProviderColumns}
      listComponent={ProviderTabList}
      userType={SPACE_TYPE.PROVIDER}
    >
      <AddUser />
      <InviteUser />
    </UserListContainer>
  );
};

export default memo(SupplierUsersPage);
