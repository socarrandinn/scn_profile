import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import UserTableContainer from 'modules/security/users/containers/UserTableContainer';
import { AddUser } from 'modules/security/user-providers/components/AddUser';
import InviteUser from 'modules/security/user-providers/components/InviteUser/InviteUser';

const UserProvidersListPage = () => {
  return (
    <UserListContainer
      path={'/security/providers-users'}
      columns={userProviderColumns}
      userType={SPACE_TYPE.PROVIDER}
      listComponent={UserTableContainer}
    >
      <AddUser />
      <InviteUser />
    </UserListContainer>
  );
};

export default UserProvidersListPage;
