import { memo } from 'react';

import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { usersInviteFilters } from 'modules/security/users-invite/constants/users-invite.filters';
import { USER_INVITE_VIEWS } from 'modules/security/users-invite/constants/user-invite-tabs-view.constants';
import SupplierUsersInviteListContainer from '../../containers/SupplierUsersInviteListContainer';

const SupplierUserInviteList = () => {
  return (
    <TableProvider id={'supplier-users-invite'} filters={usersInviteFilters}>
      <FilterViewProvider views={USER_INVITE_VIEWS}>
        <SupplierUsersInviteListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(SupplierUserInviteList);
