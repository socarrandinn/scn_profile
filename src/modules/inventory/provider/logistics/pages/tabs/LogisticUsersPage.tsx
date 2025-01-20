import { memo } from 'react';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import { ProviderTabList } from 'modules/inventory/provider/common/components/ProviderTabList';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { AddUser } from 'modules/security/user-providers/components/AddUser';
import { InviteUser } from 'modules/security/user-providers/components/InviteUser';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';

const LogisticUsersPage = () => {
  const { logistic } = useLogisticsDetailContext();

  return (
    <UserListContainer
      path={`/inventory/settings/logistics/${logistic?._id}/users`}
      columns={userProviderColumns}
      listComponent={ProviderTabList}
      userType={SPACE_TYPE.PROVIDER}
    >
      <AddUser />
      <InviteUser />
    </UserListContainer>
  );
};

export default memo(LogisticUsersPage);
