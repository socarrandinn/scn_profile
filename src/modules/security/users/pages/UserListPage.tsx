import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const UserListPage = () => {
  return (
    <UserListContainer path={'/security/users'} columns={[]} userType={SPACE_TYPE.ROOT} />
  );
};

export default UserListPage;
