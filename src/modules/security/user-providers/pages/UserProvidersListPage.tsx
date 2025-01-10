import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserProviderList from 'modules/security/user-providers/user-lists/UserProviderList';

const UserProvidersListPage = () => {
  return (
    <UserListContainer path={'/security/providers-users'} columns={[]} userType={SPACE_TYPE.PROVIDER}
                       listComponent={UserProviderList} />
  );
};

export default UserProvidersListPage;
