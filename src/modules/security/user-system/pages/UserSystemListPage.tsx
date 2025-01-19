import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { AddUser } from 'modules/security/user-system/components/AddUser';
import InviteUser from 'modules/security/user-system/components/InviteUser/InviteUser';
import UserList from 'modules/security/users/pages/UserList';

const UserSystemListPage = () => {
  return (
    <UserListContainer
      path={'/security/system-users'}
      columns={userSystemColumns}
      listComponent={UserList}
      userType={SPACE_TYPE.ROOT}
    >
      <AddUser />
      <InviteUser />
    </UserListContainer>
  );
};

export default UserSystemListPage;
