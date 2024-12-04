import { TableProvider } from '@dfl/mui-admin-layout';
import {
  UserSystemListContainerProps,
} from 'modules/security/users/containers/UserSystemListContainer';
import { usersInviteFilters } from 'modules/security/users-invite/constants';
import UserInvitationSystemListContainer from 'modules/security/users/containers/UserInvitationSystemListContainer';

const UserInvitationList = (props: UserSystemListContainerProps) => {
  return (
    <TableProvider id={'invitations'} filters={usersInviteFilters}>
      <UserInvitationSystemListContainer {...props} />
    </TableProvider>
  );
};

export default UserInvitationList;
