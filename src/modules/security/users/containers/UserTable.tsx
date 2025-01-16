import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { filters } from 'modules/security/users/constants/filters';
import UserTableContainer, { UserTableContainerProps } from 'modules/security/users/containers/UserTableContainer';

const UserSystemList = (props: UserTableContainerProps) => {
  return (
    <TableProvider id={'users'} filters={filters}>
      <UserTableContainer {...props} >
      </UserTableContainer>
    </TableProvider>
  );
};

export default memo(UserSystemList);
