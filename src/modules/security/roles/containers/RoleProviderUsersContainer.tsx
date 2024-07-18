import { memo } from 'react';
import RoleProvidersUsersTable from './RoleProvidersUsersTable';
import { FilterViewProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';

const RoleProviderUsersContainer = () => {
  return (
    <FilterViewProvider views={userViewTabs}>
      <RoleProvidersUsersTable />
    </FilterViewProvider>
  );
};

export default memo(RoleProviderUsersContainer);
