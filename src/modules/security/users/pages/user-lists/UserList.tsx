import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { filters } from 'modules/security/users/constants/filters';
import UserSystemListContainer, {
  UserSystemListContainerProps,
} from 'modules/security/users/containers/UserSystemListContainer';

const UserList = (props: UserSystemListContainerProps) => {
  return (
    <TableProvider id={'users'} filters={filters}>
      <UserSystemListContainer {...props} />
    </TableProvider>
  );
};

export default memo(UserList);
