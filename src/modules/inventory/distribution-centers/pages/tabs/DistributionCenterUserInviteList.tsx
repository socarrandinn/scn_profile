import { memo } from 'react';

import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { usersInviteFilters } from 'modules/security/users-invite/constants/users-invite.filters';
import { USER_INVITE_VIEWS } from 'modules/security/users-invite/constants/user-invite-tabs-view.constants';
import DistributionCenterInviteListContainer from '../../containers/DistributionCenterInviteListContainer';

const DistributionCenterUserInviteList = () => {
  return (
    <TableProvider id={'distribution-center-users-invite'} filters={usersInviteFilters}>
      <FilterViewProvider views={USER_INVITE_VIEWS}>
        <DistributionCenterInviteListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(DistributionCenterUserInviteList);
