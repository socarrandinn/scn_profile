import { memo } from 'react';

import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { usersInviteFilters } from 'modules/security/users-invite/constants/users-invite.filters';
import { USER_INVITE_VIEWS } from 'modules/security/users-invite/constants/user-invite-tabs-view.constants';

import LogisticUsersInviteListContainer from '../../containers/LogisticUsersInviteListContainer';

const LogisticUserInviteList = () => {
  return (
    <TableProvider id={'logistic-users-invite'} filters={usersInviteFilters}>
      <FilterViewProvider views={USER_INVITE_VIEWS}>
        <LogisticUsersInviteListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(LogisticUserInviteList);
