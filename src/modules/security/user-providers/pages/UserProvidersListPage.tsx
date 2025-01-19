import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import { AddUser } from 'modules/security/user-providers/components/AddUser';
import InviteUser from 'modules/security/user-providers/components/InviteUser/InviteUser';
import UserList from 'modules/security/users/pages/UserList';

const UserProvidersListPage = () => {
  return (
    <UserListContainer
      path={'/security/providers-users'}
      columns={userProviderColumns}
      userType={SPACE_TYPE.PROVIDER}
      listComponent={UserList}
    >
      <AddUser />
      <InviteUser />
    </UserListContainer>
  );
};

export default UserProvidersListPage;
