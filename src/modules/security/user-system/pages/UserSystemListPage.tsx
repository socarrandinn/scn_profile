import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserSystemList from 'modules/security/user-system/containers/UserSystemList';

const UserSystemListPage = () => {
  return (
    <UserListContainer path={'/security/system-users'}
                       columns={[]}
                       listComponent={UserSystemList}
                       userType={SPACE_TYPE.ROOT} />
  );
};

export default UserSystemListPage;
