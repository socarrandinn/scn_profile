import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { UserTableContainerProps } from '../containers/UserTableContainer';
import { userFilters } from '../constants/user-filters';
import UserInvitationTableContainer from '../containers/UserInvitationTableContainer';

const UserListInvitation = ({ type }: UserTableContainerProps) => {
  return (
    <TableProvider id={`user-invitations-${type}`} filters={userFilters}>
      <UserInvitationTableContainer type={type} columns={[]} />
    </TableProvider>
  );
};

export default memo(UserListInvitation);
