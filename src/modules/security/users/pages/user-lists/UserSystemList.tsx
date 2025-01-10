import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { filters } from 'modules/security/users/constants/filters';
import UserSystemListContainer, {
  UserSystemListContainerProps,
} from 'modules/security/users/containers/UserTableContainer';

const UserSystemList = (props: UserSystemListContainerProps) => {
  return (
    <TableProvider id={'users'} filters={filters}>
      <UserSystemListContainer {...props} >

      </UserSystemListContainer>
    </TableProvider>
  );
};

export default memo(UserSystemList);
