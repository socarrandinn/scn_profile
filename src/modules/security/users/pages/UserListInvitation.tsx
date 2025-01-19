import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { UserTableContainerProps } from '../containers/UserTableContainer';
import { userInvitationFilters } from '../constants/user-filters';
import UserInvitationTableContainer from '../containers/UserInvitationTableContainer';
import { userInvitationColumns } from '../constants/user.columns';

const UserListInvitation = ({ type }: UserTableContainerProps) => {
  return (
    <TableProvider id={`user-invitations-${type}`} filters={userInvitationFilters(type)}>
      <UserInvitationTableContainer type={type} columns={userInvitationColumns} />
    </TableProvider>
  );
};

export default memo(UserListInvitation);
