import { memo } from 'react';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { AddUser } from 'modules/security/user-providers/components/AddUser';
import { InviteUser } from 'modules/security/user-providers/components/InviteUser';
import SystemUsers from '../components/SystemUsers/SystemUsers';

const SystemUsersContainer = ({ path }: { path: string }) => {
  return (
    <UserListContainer
      path={path}
      columns={userSystemColumns}
      listComponent={SystemUsers}
      userType={SPACE_TYPE.PROVIDER}
    >
      <AddUser />
      <InviteUser />
    </UserListContainer>
  );
};

export default memo(SystemUsersContainer);
