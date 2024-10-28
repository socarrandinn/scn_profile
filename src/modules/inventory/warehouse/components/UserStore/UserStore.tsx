import { memo } from 'react';
import { UserList } from 'modules/security/users/pages';

const UserStore = () => {
  return <UserList />;
};

export default memo(UserStore);
