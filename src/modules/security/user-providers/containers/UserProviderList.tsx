import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { filters } from 'modules/security/users/constants/filters';
import UserSystemListContainer, {
  UserTableContainerProps,
} from 'modules/security/users/containers/UserTableContainer';
import InviteUser from '../components/InviteUser/InviteUser';
import { AddUser } from '../components/AddUser';

const UserProviderList = (props: UserTableContainerProps) => {
  return (
    <TableProvider id={'users-providers'} filters={filters}>
      <UserSystemListContainer {...props} >
        <AddUser />
        <InviteUser />
      </UserSystemListContainer>
    </TableProvider>
  );
};

export default memo(UserProviderList);
