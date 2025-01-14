import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserProviderList from 'modules/security/user-providers/containers/UserProviderList';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';

const UserProvidersListPage = () => {
  return (
    <UserListContainer
      path={'/security/providers-users'}
      columns={userProviderColumns}
      userType={SPACE_TYPE.PROVIDER}
      listComponent={UserProviderList}
    />
  );
};

export default UserProvidersListPage;
