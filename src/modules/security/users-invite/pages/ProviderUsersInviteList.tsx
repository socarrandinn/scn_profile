import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { usersInviteFilters } from 'modules/security/users-invite/constants/users-invite.filters';
import { USER_INVITE_VIEWS } from '../constants/user-invite-tabs-view.constants';
import ProviderUsersInviteListContainer from '../containers/ProviderUsersInviteListContainer';

const UsersInviteList = () => {
  return (
    <TableProvider id={'provider-users-invite'} filters={usersInviteFilters}>
      <FilterViewProvider views={USER_INVITE_VIEWS}>
        <ProviderUsersInviteListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(UsersInviteList);
