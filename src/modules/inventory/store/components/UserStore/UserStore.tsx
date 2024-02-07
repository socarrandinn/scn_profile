import { memo } from 'react';
import { UserList } from 'modules/security/users/pages';

const UserStore = () => {
  return (
        <UserList mt={0}/>
  )
}

export default memo(UserStore);
