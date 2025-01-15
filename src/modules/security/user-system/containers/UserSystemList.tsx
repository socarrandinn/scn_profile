import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { filters } from 'modules/security/users/constants/filters';
import UserTableContainer, { UserTableContainerProps } from 'modules/security/users/containers/UserTableContainer';
import InviteUser from '../components/InviteUser/InviteUser';
import { AddUser } from '../components/AddUser';

const UserSystemList = (props: UserTableContainerProps) => {
  return (
    <TableProvider id={'users'} filters={filters}>
      <UserTableContainer {...props} >
        <AddUser />
        <InviteUser />
      </UserTableContainer>
    </TableProvider>
  );
};

export default memo(UserSystemList);
