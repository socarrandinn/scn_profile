import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const UserProvidersListPage = () => {
  return (
    <UserListContainer path={'/security/providers-users'} columns={[]} userType={SPACE_TYPE.PROVIDER} />
  );
};

export default UserProvidersListPage;
