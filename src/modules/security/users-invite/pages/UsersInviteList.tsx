import { memo } from 'react';

import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';
import { usersInviteFilters } from 'modules/security/users-invite/constants/users-invite.filters';
import { USER_INVITE_VIEWS } from '../constants/user-invite-tabs-view.constants';

const UsersInviteList = () => {
  return (
    <TableProvider id={'usersInvites'} filters={usersInviteFilters}>
      <FilterViewProvider views={USER_INVITE_VIEWS}>
        <UsersInviteListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(UsersInviteList);
